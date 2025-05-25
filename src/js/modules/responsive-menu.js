const responsiveMenu = () =>{
    const wrapper = document.querySelector('.header__wrapper');
    const menuList = document.querySelector('.header__list');
    const menuItems = document.querySelectorAll('.header__list > .header__item:not(.more-menu)');
    const dropdown = document.querySelector('.dropdown');
    const moreMenu = document.querySelector('.more-menu');
    const moreButton = document.querySelector('.more-button');

    // Проверка наличия всех элементов
    if (!wrapper || !menuList || !menuItems.length || !dropdown || !moreMenu || !moreButton) {
        console.error('One or more required elements are missing:', { wrapper, menuList, menuItems, dropdown, moreMenu, moreButton });
        return;
    }

    function updateMenu() {
        // Сбрасываем состояние
        menuItems.forEach(item => {
            item.classList.remove('hidden'); // Убираем класс скрытия
        });
        moreMenu.style.display = 'none';
        dropdown.innerHTML = '';
        dropdown.classList.remove('active'); // Закрываем dropdown

        // Получаем ширину контейнера .header__wrapper
        const wrapperWidth = wrapper.getBoundingClientRect().width;
        const columnGap = 20; // Учитываем column-gap: 20px
        const moreButtonWidth = moreButton.getBoundingClientRect().width + 20; // Запас 20px
        const baseWidth = 1600; // Начало скрытия
        const minWidth = 1000; // Остановка скрытия
        const widthStep = 150; // Шаг скрытия пунктов
        const initialItemsToHide = 2; // Скрываем 2 пункта на 1600px

        // Вычисляем общую ширину пунктов меню с учётом column-gap
        let totalWidth = 0;
        menuItems.forEach((item, index) => {
            totalWidth += item.getBoundingClientRect().width;
            if (index < menuItems.length - 1) {
                totalWidth += columnGap;
            }
        });

        // Проверяем ширину экрана
        const hiddenItems = [];
        let itemsToHide = 0;
        if (window.innerWidth <= baseWidth && window.innerWidth >= minWidth) {
            // Рассчитываем количество пунктов для скрытия
            const widthDifference = baseWidth - window.innerWidth;
            itemsToHide = initialItemsToHide + Math.floor(widthDifference / widthStep);

            // Ограничиваем, чтобы оставить хотя бы один пункт видимым
            itemsToHide = Math.min(itemsToHide, menuItems.length - 1);
        } else if (window.innerWidth < minWidth) {
            // На ширине <1000px сохраняем состояние для 1000px
            const widthDifference = baseWidth - minWidth;
            itemsToHide = initialItemsToHide + Math.floor(widthDifference / widthStep);
            itemsToHide = Math.min(itemsToHide, menuItems.length - 1);
        }

        // Скрываем пункты с конца
        if (itemsToHide > 0) {
            Array.from(menuItems).slice(-itemsToHide).forEach(item => {
                hiddenItems.push(item);
            });

            // Показываем кнопку "Ещё" и добавляем скрытые пункты в dropdown
            moreMenu.style.display = 'flex';
            hiddenItems.forEach(item => {
                item.classList.add('hidden'); // Скрываем через класс
                const clonedItem = item.cloneNode(true);
                clonedItem.classList.remove('hidden'); // Убираем класс для клона
                dropdown.appendChild(clonedItem);
            });
        }
    }

    // Переключение выпадающего меню
    moreButton.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const isActive = dropdown.classList.toggle('active');
    });

    // Закрытие выпадающего меню при клике вне
    document.addEventListener('click', (e) => {
        if (!moreButton.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Закрытие выпадающего при изменении размера окна
    window.addEventListener('resize', () => {
        dropdown.classList.remove('active');
    });

    // Debounce для события resize
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }
    window.addEventListener('resize', debounce(updateMenu, 100));

    // Инициализация меню
    updateMenu();
}

export default responsiveMenu;