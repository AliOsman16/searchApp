# 🔍 searchApp

Kelimeye göre internetten görsel araması yapmanızı sağlayan basit ve sezgisel bir web uygulaması.

---

## 📌 Proje Hakkında

**searchApp**, kullanıcının girdiği bir kelimeye göre ilgili görselleri internetten çekip gösteren bir web tabanlı uygulamadır.  
Temel olarak bir arama motoru gibi çalışır, ancak yalnızca **görsel içerik** üzerine odaklanır. Geliştirme sürecinde temel web teknolojileri kullanılmıştır.

---

## 🌟 Özellikler

- 🔎 Anahtar kelimeye göre görsel arama
- 🖼️ Arama sonucunda dinamik olarak görsellerin gösterilmesi
- 🔄 Yeni kelime girildiğinde önceki sonuçların temizlenmesi
- 📱 Tüm cihazlarda çalışabilen basit ve mobil uyumlu tasarım

---

## 🚧 Kullanılan Teknolojiler

| Teknoloji     | Açıklama                          |
|---------------|-----------------------------------|
| HTML          | Sayfa yapısının oluşturulması     |
| CSS           | Görsel tasarım ve stillendirme    |
| JavaScript    | Dinamik veri çekme ve arayüz kontrolü |
| Fetch API     | İnternetten görsel verisi alma işlemi |

> Not: Uygulama, görselleri çekmek için bir görsel API'si olan Unsplash API ile çalışacak şekilde tasarlanmıştır. Projede kendi api anahtarınızı girmeyi unutmayınız.

---

## 🛠️ Kurulum ve Kullanım

1. Projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/AliOsman16/searchApp.git
   
2. Proje dizinine gidin:
   ```
   cd searchApp

3. Uygulamayı çalıştırmak için SearchApp.html dosyasını herhangi bir tarayıcıda açın:
        Sağ tıklayıp "Tarayıcıda Aç" veya Dosyayı sürükleyip bir tarayıcı sekmesine bırakın

## 📸 Nasıl Çalışır?
   ``
    Uygulama yüklendiğinde bir arama kutusu görünür.
    Arama kutusuna bir kelime yazıp Enter tuşuna bastığınızda,
    Uygulama, o kelimeyle ilişkili görselleri getirir ve ekranda gösterir.
    Yeni bir kelime arandığında önceki sonuçlar temizlenir ve yeni görseller gösterilir.

## 📁 Dosya Yapısı
```bash
searchApp/
│
├── SearchApp.html    # Ana HTML dosyası
├── SearchApp.js      # Uygulamanın JavaScript mantığı
└── styles.css        # Stil dosyası (varsa)
```
## 💡 Geliştirme Fikirleri:

   🔐 Gerçek bir görsel API (Unsplash, Pexels vb.) entegrasyonu
    
   📱 Daha gelişmiş mobil tasarım ve responsive yapı

   ⏳ Yükleniyor animasyonu / hata mesajları

   🗂️ Kategorilere göre filtreleme

   


