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

// ====== 2. İLETİŞİM FORMU ONAYI (Hocanın Gereksinimi) ======
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

// ====== 3. RESİM GALERİSİ MODAL KONTROLÜ (Hocanın Gereksinimi) ======
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