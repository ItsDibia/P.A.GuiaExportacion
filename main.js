        // Navegación entre secciones
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('main section');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-section');
                
                // Remover la clase 'active' de todas las secciones
                sections.forEach(section => section.classList.remove('active'));

                // Agregar la clase 'active' a la sección correspondiente
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active');

                // Hacer scroll suave hacia la sección activa
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // En dispositivos móviles, se asegura que el contenido sea vertical y accesible
        if (window.innerWidth <= 768) {
            document.querySelector('main').style.flexDirection = 'column';
        } else {
            document.querySelector('main').style.flexDirection = 'row';
        }


            // Mejora de accesibilidad con teclado
            link.addEventListener('keydown', function(e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    link.click();
                }
            });
        
