// ====== 1. BAŞVURU FORMU ONAYI (Ana form) ======
const anaForm = document.getElementById('anaBasvuruFormu');
const anaFormStatus = document.getElementById('anaBasvuruStatus');

if (anaForm) {
    anaForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        anaForm.reset(); 
        anaFormStatus.innerHTML = '✅ **Başvurunuz alındı!** Ajansımız size geri dönüş yapacaktır.';
        setTimeout(() => {
            anaFormStatus.innerHTML = '';
        }, 4000); 
    });
}

// ====== 2. İLETİŞİM FORMU ONAYI  ======
const iletisimFormu = document.getElementById('iletisimFormu');
const iletisimStatus = document.getElementById('iletisimStatus');

if (iletisimFormu) {
    iletisimFormu.addEventListener('submit', function(event) {
        event.preventDefault(); 
        iletisimFormu.reset(); 
        // Hocanın istediği mesaj: "mesajınız gönderildi"
        iletisimStatus.style.color = 'green';
        iletisimStatus.innerHTML = '✅ **Mesajınız başarıyla gönderildi!**'; 
        setTimeout(() => {
            iletisimStatus.innerHTML = '';
        }, 4000); 
    });
}

// ====== 3. RESİM GALERİSİ MODAL KONTROLÜ  ======
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];
const thumbnails = document.querySelectorAll('.thumbnail img'); 

// Küçük resimlere tıklandığında Modal'ı aç
thumbnails.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImage.src = this.getAttribute('data-full'); 
    });
});

// Kapatma butonuna basılınca modal'ı kapat
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

// Kullanıcı Modal'ın dışındaki siyah alana tıklarsa modal'ı kapat
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}

// ====== 4. GİRİŞ YAP (LOGIN) MODAL İŞLEMLERİ ======
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeLogin = document.getElementsByClassName("close-login")[0];
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");

// Butona tıklayınca aç
if (loginBtn) {
    loginBtn.onclick = function(e) {
        e.preventDefault(); // Sayfa yukarı kaymasın
        loginModal.style.display = "block";
    }
}

// X işaretine basınca kapat
if (closeLogin) {
    closeLogin.onclick = function() {
        loginModal.style.display = "none";
        loginStatus.innerHTML = ""; // Mesajı temizle
        loginForm.reset(); // Formu temizle
    }
}

// Form gönderildiğinde (Submit)
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const adSoyad = document.getElementById("loginName").value;
        // Basit bir karşılama mesajı
        loginStatus.innerHTML = `Hoşgeldiniz, ${adSoyad}! Yönlendiriliyorsunuz...`;
        
        // 2 saniye sonra pencereyi kapat
        setTimeout(() => {
            loginModal.style.display = "none";
            loginStatus.innerHTML = "";
            loginForm.reset();
            // İstersen burada giriş yapıldıktan sonra butonun adını değiştirebiliriz:
            loginBtn.innerHTML = `👤 ${adSoyad}`;
        }, 2000);
    });
}

// Pencere dışına tıklayınca kapat (Mevcut window.onclick içine entegre etmek daha sağlıklı)
// Mevcut window.onclick fonksiyonunu şöyle güncelleyelim:
window.onclick = function(event) {
    // Galeri modali için
    if (event.target == modal) {
        modal.style.display = "none";
    }
    // Login modali için
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

