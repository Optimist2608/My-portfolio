// site-info.js - Информация о сайте и статистика
document.addEventListener('DOMContentLoaded', function() {
    // Конфигурация размера проекта
    const PROJECT_CONFIG = {
        folderPath: "D:\\ITOP\\Projects\\Portfolio",
        manualSize: "736 MB", // Ручное указание размера
        lastUpdate: "Сегодня",
        fileCount: 250 // Примерное количество файлов
    };
    
    // Функция для форматирования даты
    function formatDate(date) {
        const options = { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('ru-RU', options);
    }
    
    // Функция для получения информации о сайте
    function getSiteInfo() {
        const lastModified = new Date(document.lastModified);
        const now = new Date();
        
        // Обновляем элементы
        document.getElementById('last-updated').textContent = formatDate(lastModified);
        document.getElementById('last-change-date').textContent = formatDate(lastModified);
        
        // Показываем размер проекта
        document.getElementById('project-size').textContent = PROJECT_CONFIG.manualSize;
        
        // Информация о проекте
        document.getElementById('project-folder').textContent = PROJECT_CONFIG.folderPath;
        document.getElementById('file-count').textContent = PROJECT_CONFIG.fileCount + " файлов";
        
        // Рассчитываем время с последнего изменения
        const diffTime = Math.abs(now - lastModified);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Добавляем информацию о давности
        let timeAgo = '';
        if (diffDays === 0) {
            timeAgo = ' (сегодня)';
        } else if (diffDays === 1) {
            timeAgo = ' (вчера)';
        } else if (diffDays < 7) {
            timeAgo = ` (${diffDays} дня назад)`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            timeAgo = ` (${weeks} недели назад)`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            timeAgo = ` (${months} месяцев назад)`;
        } else {
            const years = Math.floor(diffDays / 365);
            timeAgo = ` (${years} лет назад)`;
        }
        
        document.getElementById('last-updated').textContent += timeAgo;
    }
    
    // Измеряем время загрузки
    function measureLoadTime() {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            document.getElementById('load-time').textContent = loadTime + ' мс';
            
            // Добавляем оценку скорости
            let speedRating = '';
            if (loadTime < 1000) {
                speedRating = ' (Очень быстро)';
            } else if (loadTime < 3000) {
                speedRating = ' (Быстро)';
            } else if (loadTime < 5000) {
                speedRating = ' (Средне)';
            } else {
                speedRating = ' (Медленно)';
            }
            
            document.getElementById('load-time').textContent += speedRating;
        } else {
            document.getElementById('load-time').textContent = '~1500 мс (оценка)';
        }
    }
    
    // Показываем информацию о системе
    function showSystemInfo() {
        // Информация о браузере
        const browserInfo = navigator.userAgent;
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        
        // Показываем информацию о платформе
        const platform = isMobile ? 'Мобильное устройство' : 'Компьютер';
        document.getElementById('platform-info').textContent = platform;
        
        // Включена ли анимация курсора
        const cursorAnimation = localStorage.getItem('cursor-animation') === 'true';
        document.getElementById('cursor-status').textContent = cursorAnimation ? 'Включена' : 'Выключена';
    }
    
    // Инициализация
    function initSiteInfo() {
        getSiteInfo();
        showSystemInfo();
        
        // Замеряем время загрузки после полной загрузки страницы
        window.addEventListener('load', function() {
            setTimeout(measureLoadTime, 100);
        });
        
        // Обновляем время каждые 5 минут
        setInterval(getSiteInfo, 300000);
        
        console.log('Информация о сайте загружена');
        console.log(`Путь к проекту: ${PROJECT_CONFIG.folderPath}`);
        console.log(`Размер проекта: ${PROJECT_CONFIG.manualSize}`);
    }
    
    // Запускаем инициализацию
    initSiteInfo();
});