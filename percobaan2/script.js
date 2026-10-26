/* ==================================================================
   REFLEKSI MATA KULIAH — E-PORTOFOLIO AKADEMIK
   script.js — seluruh data & interaksi JavaScript
   ------------------------------------------------------------------
   Struktur file ini:
   1. DATA MATA KULIAH SEMESTER 1        → cari "1. DATA COURSES"
   2. DATA MATA KULIAH SEMESTER 2        → cari "2. DATA SEMESTER 2"
   3. Render kartu mata kuliah            → cari "3. RENDER CARDS"
   4. Course detail modal (SPA)           → cari "4. COURSE MODAL"
   5. File preview modal                  → cari "5. PREVIEW MODAL"
   6. Navbar (scroll, active link, mobile)→ cari "6. NAVBAR"
   7. Dark mode toggle                    → cari "7. DARK MODE"
   8. Scroll progress & back-to-top       → cari "8. SCROLL WIDGETS"
   9. Scroll reveal animation             → cari "9. SCROLL REVEAL"
   10. Search / filter mata kuliah        → cari "10. SEARCH"
   11. Footer (identitas & tahun)         → cari "11. FOOTER"
   12. Init                               → cari "12. INIT"
   ================================================================== */


/* ==================================================================
   1. DATA COURSES — SEMESTER 1
   ------------------------------------------------------------------
   Ini adalah SATU-SATUNYA tempat yang perlu kamu ubah untuk:
   - Mengedit refleksi 4C (connection/challenge/concept/change)
   - Mengedit info artefak (evidenceLabel/evidenceLink/why/support)
   - Menambahkan materi pembelajaran (materials)
   - Menambahkan dokumen pendukung yang bisa dibaca langsung (documents)
   Struktur HTML/CSS TIDAK PERLU diubah — semua dirender otomatis.
   ================================================================== */
const courses = [
    {
        id: 1,
        number: "01",
        icon: "📘",
        title: "Filosofi Pendidikan dan Pendidikan Nilai",
        shortDesc: "Pemikiran Ki Hadjar Dewantara, growth mindset, pendidikan nilai, dan kode etik profesi guru.",

        reflection: {
            connection: `Materi topik 1 sampai topik 4 berkaitan erat dengan peran saya sebagai calon guru

            Pada topik pertama, saya mempelajari pemikiran Ki Hadjar Dewantara bahwa pendidikan bertujuan menuntun peserta didik agar berkembang sesuai potensinya. Guru berperan sebagai pembimbing melalui semboyan:
• Ing Ngarso Sung Tulodo berarti guru menjadi teladan bagi peserta didik.
• Ing Madya Mangun Karso berarti guru membangun semangat dan motivasi peserta didik.
• Tut Wuri Handayani berarti guru memberikan dorongan agar peserta didik mandiri.

Pada topik kedua, saya mempelajari growth mindset, yaitu pola pikir bahwa kemampuan dapat berkembang melalui usaha, latihan, dan pengalaman. Guru perlu mendorong peserta didik agar berani mencoba, tidak takut melakukan kesalahan, dan terus belajar.

Pada topik ketiga, saya memahami bahwa pendidikan nilai penting untuk membentuk karakter, seperti kejujuran, tanggung jawab, dan sikap saling menghargai. Nilai-nilai tersebut diperlukan untuk menghadapi permasalahan seperti perundungan dan pengaruh negatif media sosial.

Pada topik keempat, saya mempelajari pentingnya kode etik profesi guru sebagai pedoman untuk menjalankan tugas secara profesional dan bertanggung jawab.
`,

            challenge: `Tantangan yang saya alami saat praktik mengajar adalah anggapan bahwa tugas guru hanya menyampaikan materi. Setelah mempelajari materi ini, saya menyadari bahwa guru juga bertugas membimbing, memotivasi, dan membantu peserta didik mengembangkan potensinya. Oleh karena itu, pembelajaran perlu berpusat pada peserta didik agar mereka dapat belajar secara aktif dan mandiri`,

            concept: `Beberapa konsep penting yang saya pahami adalah:
            1.Pendidikan berpusat pada peserta didik. Guru perlu memperhatikan kebutuhan, minat, dan kemampuan setiap peserta didik.

2.Kodrat alam dan kodrat zaman. Pembelajaran perlu menyesuaikan lingkungan peserta didik serta perkembangan ilmu pengetahuan dan teknologi.

3.Pengembangan peserta didik secara utuh. Pendidikan tidak hanya mengembangkan pengetahuan, tetapi juga karakter, kreativitas, sikap, dan keterampilan.

4.Kode etik profesi guru. Guru harus menjalankan tugas secara profesional, menjaga etika, dan mengutamakan kepentingan peserta didik.

`,

            change: `Setelah mempelajari materi ini, saya akan melakukan beberapa perubahan:
            Menjadi guru yang tidak hanya menyampaikan materi, tetapi juga membimbing peserta didik.

1. Merancang pembelajaran sesuai kebutuhan, minat, dan kemampuan peserta didik.

2.Menerapkan semboyan Ki Hadjar Dewantara dalam kegiatan pembelajaran.

3.Menumbuhkan growth mindset agar peserta didik berani mencoba dan tidak mudah menyerah.

4.Menanamkan nilai moral, karakter, dan Pancasila dalam kehidupan sehari-hari.

5.Menciptakan pembelajaran yang aktif, menyenangkan, dan mendorong kemandirian peserta didik.

6.Menerapkan kode etik profesi guru dalam menjalankan tugas.

7.Terus belajar dan meningkatkan kompetensi agar menjadi guru yang profesional..
`
        },

        artifacts: [
            {
                name: "Tugas Topik 3A — Filosofi Pendidikan dan Pendidikan Nilai",
                type: "link",
                url: "https://drive.google.com/file/d/1jxPV7W5r1v3NE3eJ5Sy0Qmis5z-4kkCt/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya di data `artifacts` (properti `url`) pada script.js.",
                preview: false
            }
        ],
        artifactWhy: `Artefak ini saya pilih karena pendidikan moral dan karakter sangat penting dalam dunia pendidikan saat ini. Pada topik 1 dan 2, saya mempelajari filosofi pendidikan Ki Hadjar Dewantara, konsep kodrat alam, kodrat zaman, dan growth mindset yang menekankan pentingnya membimbing peserta didik agar berkembang sesuai potensinya. Di era digital, teknologi dan media sosial memberikan banyak manfaat, tetapi juga dapat menimbulkan dampak negatif, seperti menurunnya sopan santun, kurangnya empati dan tanggung jawab, serta munculnya perundungan dan kekerasan.

Melalui artefak ini, saya memahami bahwa pendidikan tidak hanya berfokus pada pengetahuan akademik, tetapi juga pembentukan karakter. Penanaman nilai moral perlu dilakukan secara konsisten di sekolah, keluarga, dan masyarakat. Sebagai calon guru, saya harus mampu memberikan teladan, menanamkan nilai-nilai positif, serta membimbing peserta didik agar memiliki karakter yang baik dan mampu menggunakan teknologi secara bijaksana.
`,
        artifactSupport: [
            `Bagian yang membahas kasus "Krisis Moral Anak Indonesia", "Degradasi Moral Pendidikan dan Peserta Didik", dan "Indonesia Darurat Pendidikan Moral dan Karakter" — mendukung refleksi bahwa teknologi dan media sosial dapat berdampak negatif tanpa diimbangi pendidikan nilai.`,
            `Penjelasan mengenai moral dan karakter — moral sebagai pemahaman baik-buruk, karakter sebagai perwujudannya dalam kehidupan sehari-hari.`,
            `Uraian filosofi Ki Hadjar Dewantara — "Ing Ngarso Sung Tulodo, Ing Madya Mangun Karso, Tut Wuri Handayani" — menegaskan peran guru sebagai teladan, pembimbing, dan pemberi motivasi.`,
            `Penjelasan bahwa teknologi dan media sosial ibarat pisau bermata dua — memicu perilaku negatif seperti perundungan dan menurunnya empati.`,
            `Pembahasan perubahan perilaku anak dan remaja di keluarga, sekolah, dan masyarakat — menurunnya sopan santun, empati, dan tanggung jawab.`,
            `Pernyataan bahwa sekolah, keluarga, dan masyarakat memiliki tanggung jawab bersama menanamkan nilai moral.`,
            `Penjelasan bahwa guru tidak hanya mengajar, tetapi juga mendidik, membimbing, dan membentuk karakter peserta didik.`
        ],

        materials: [],
        documents: []
    },

    {
        id: 2,
        number: "02",
        icon: "🧠",
        title: "Pemahaman tentang Peserta Didik dan Pembelajaran",
        shortDesc: "Teori perkembangan kognitif, sosial-emosional, moral, dan fisik peserta didik, serta profiling peserta didik.",

        reflection: {
            connection: `Materi perkuliahan pada topik 1 sampai topik 4 memiliki keterkaitan yang erat dengan peran saya sebagai calon guru dalam memahami karakteristik peserta didik secara mendalam.

Pada topik pertama, saya mempelajari: (1) Teori perkembangan kognitif Piaget dan Vygotsky — Piaget menjelaskan perkembangan kognitif berlangsung bertahap sesuai usia melalui pengalaman langsung, sedangkan Vygotsky menekankan pengaruh interaksi sosial dan budaya serta pentingnya scaffolding dari guru; (2) Perkembangan sosial-emosional menurut Erikson — pentingnya memahami kondisi emosional peserta didik untuk menciptakan lingkungan belajar yang aman dan mendukung; (3) Perkembangan moral menurut Kohlberg dan Gilligan — proses memahami nilai benar-salah secara bertahap; (4) Perkembangan fisik — perubahan biologis dan fisiologis yang memengaruhi cara belajar peserta didik.

Pada topik kedua, saya mempelajari bahwa karakteristik peserta didik dipengaruhi faktor internal (kemampuan akademik, usia, motivasi, dll.) dan eksternal (keluarga, sekolah, teman sebaya).

Pada topik ketiga, saya mempelajari teori konstruktivisme, humanisme, pembelajaran terdiferensiasi (Carol Ann Tomlinson), dan pentingnya lingkungan belajar yang mendukung.

Pada topik keempat, saya mempelajari profiling peserta didik — mengumpulkan informasi karakteristik, potensi, dan kebutuhan peserta didik untuk merancang strategi pembelajaran yang sesuai.`,

            challenge: `Berdasarkan pengalaman praktik mengajar sebelumnya, saya cenderung memandang karakteristik peserta didik hanya dari aspek kecerdasan dan kemampuan akademik. Setelah mempelajari materi perkuliahan, saya menyadari bahwa karakteristik peserta didik perlu dipahami secara lebih mendalam karena dipengaruhi berbagai faktor dan memiliki keragaman yang berbeda-beda, sehingga guru dapat menentukan strategi pembelajaran yang lebih optimal melalui pembelajaran terdiferensiasi.`,

            concept: `1. Memahami karakteristik peserta didik — perkembangan kognitif, sosial-emosional, moral, dan fisik (Piaget, Vygotsky, Erikson, Kohlberg, Gilligan).
2. Memahami faktor internal dan eksternal yang memengaruhi perkembangan peserta didik.
3. Merancang pembelajaran terdiferensiasi dengan pendekatan konstruktivisme dan humanisme.
4. Melakukan profiling peserta didik sebagai dasar strategi pembelajaran yang efektif.`,

            change: `1. Memahami karakteristik setiap peserta didik dari aspek kognitif, sosial-emosional, moral, dan fisik sebelum melaksanakan pembelajaran.
2. Memperhatikan faktor lingkungan keluarga, sekolah, dan pergaulan.
3. Menerapkan pembelajaran terdiferensiasi sesuai kemampuan, minat, dan kebutuhan peserta didik.
4. Melakukan profiling peserta didik untuk menciptakan lingkungan belajar yang efektif, inklusif, dan berpihak pada peserta didik.`
        },

        artifacts: [
            {
                name: "Tugas Topik 3D — Sintesis",
                type: "link",
                url: "https://drive.google.com/file/d/1I2iu5mFp-OqdHG0QOx9JchCY0FYfjm7P/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: true
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena topik ini membahas kasus yang terjadi di kelas XI IPS 2 Bu Sinata, yaitu rendahnya kemandirian, partisipasi, dan kemampuan berpikir kritis peserta didik. Permasalahan tersebut sangat relevan dengan kondisi yang kemungkinan akan saya temui sebagai guru di kelas nantinya. Melalui kasus tersebut, saya belajar menganalisis akar permasalahan yang dialami peserta didik, mengaitkannya dengan berbagai teori pembelajaran yang telah dipelajari, serta menentukan alternatif strategi pembelajaran yang sesuai.`,
        artifactSupport: [
            `Melalui analisis kasus di kelas XI IPS 2, saya menyadari bahwa guru tidak dapat memahami karakter peserta didik hanya dari perilaku yang tampak di permukaan, tetapi perlu menelaah akar permasalahannya.`,
            `Artefak menunjukkan bahwa setiap peserta didik memiliki karakteristik yang beragam dan unik.`,
            `Analisis kasus memperlihatkan bahwa teori konstruktivisme, humanisme, dan pembelajaran terdiferensiasi dapat digunakan guru untuk merancang strategi sesuai karakteristik dan kebutuhan peserta didik yang beragam.`
        ],

        materials: [],
        documents: []
    },

    {
        id: 3,
        number: "03",
        icon: "🔍",
        title: "Pembelajaran Mendalam dan Asesmen Dasar",
        shortDesc: "Pendekatan Understanding by Design (UbD), asesmen awal-formatif-sumatif, dan refleksi-inkuiri kolaboratif.",

        reflection: {
            connection: `Materi perkuliahan dari topik 1 hingga topik 4 memiliki hubungan yang erat dengan peran saya sebagai calon guru dalam merancang strategi pembelajaran dan asesmen melalui pemahaman yang mendalam terhadap karakteristik peserta didik.

Topik pertama mengenalkan pendekatan Pembelajaran Mendalam: konsep dasar, dimensi profil lulusan, prinsip-prinsip (berkesadaran, bermakna, menggembirakan), pengalaman belajar (memahami, mengaplikasikan, merefleksikan), Taksonomi SOLO, dan tantangan implementasinya.

Topik kedua membahas perancangan pembelajaran mendalam menggunakan pendekatan Understanding by Design (UbD) — menentukan tujuan pembelajaran, merancang asesmen, dan menyusun kegiatan pembelajaran — serta pembelajaran terdiferensiasi.

Topik ketiga membahas implementasi pembelajaran mendalam dan berbagai jenis asesmen: asesmen awal, asesmen formatif, dan asesmen sumatif.

Topik keempat membahas refleksi dan inkuiri kolaboratif — bahwa peran guru tidak hanya menyampaikan materi, tetapi juga terus mengevaluasi dan memperbaiki praktik pembelajaran melalui asesmen, refleksi, dan diskusi berbasis data bersama guru lain.`,

            challenge: `Berdasarkan pengalaman praktik mengajar sebelumnya, saya menyusun rancangan pembelajaran yang belum sedetail RPM, kurang mengakomodasi keberagaman kemampuan peserta didik, dan penilaian masih berfokus pada hasil belajar akhir. Setelah mempelajari materi perkuliahan, saya menyadari bahwa perencanaan pembelajaran dapat disusun menggunakan pendekatan Understanding by Design (UbD) agar tujuan, proses, dan asesmen menjadi lebih terarah, serta penilaian perlu mencakup asesmen awal, formatif, dan sumatif.`,

            concept: `1. Pembelajaran mendalam (deep learning) mendorong peserta didik memahami, mengaplikasikan, dan merefleksikan pengetahuan agar pembelajaran bermakna, berkesadaran, dan menggembirakan.
2. Perancangan pembelajaran sistematis melalui pendekatan Understanding by Design (UbD).
3. Pembelajaran dan asesmen perlu mengakomodasi keberagaman peserta didik melalui pembelajaran terdiferensiasi serta asesmen awal, formatif, dan sumatif.
4. Guru perlu melakukan refleksi dan inkuiri kolaboratif secara berkelanjutan.`,

            change: `1. Merancang pembelajaran yang lebih bermakna dengan prinsip pembelajaran mendalam.
2. Menyusun rancangan pembelajaran secara sistematis menggunakan pendekatan UbD.
3. Menerapkan pembelajaran terdiferensiasi sesuai kemampuan, minat, dan gaya belajar.
4. Menggunakan asesmen awal, formatif, dan sumatif untuk menyesuaikan strategi pembelajaran.
5. Membiasakan diri melakukan refleksi dan berkolaborasi dengan guru lain.`
        },

        artifacts: [
            {
                name: "Tugas Topik 2D — Rencana Pembelajaran Mendalam",
                type: "link",
                url: "https://drive.google.com/file/d/1L4jwAAf-WTX8oI_4l3Z6xPOCgJG56LE_/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: true
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena pada topik ini saya belajar menyusun RPM secara berkelompok menggunakan materi Gerbang Logika. Artefak ini menjadi penting karena memberikan gambaran mengenai langkah-langkah merancang skenario pembelajaran yang akan diterapkan di kelas. Melalui penyusunan RPM, saya menyadari bahwa guru perlu merancang pembelajaran secara matang agar proses belajar tidak hanya menjadi rutinitas semata, tetapi mampu menciptakan pembelajaran yang bermakna dan bermanfaat bagi peserta didik.`,
        artifactSupport: [
            `RPM yang disusun menggunakan pendekatan pembelajaran terdiferensiasi membuat saya menyadari pentingnya pengelolaan waktu dan kegiatan yang mengakomodasi kemampuan, minat, dan kebutuhan peserta didik yang beragam.`,
            `Proses penyusunan RPM menunjukkan bahwa rancangan pembelajaran masih perlu disempurnakan melalui refleksi dan evaluasi.`,
            `Artefak menunjukkan bahwa metode pembelajaran bersifat fleksibel dan berpusat pada peserta didik, dengan guru sebagai fasilitator.`
        ],

        materials: [],
        documents: []
    },

    {
        id: 4,
        number: "04",
        icon: "🌱",
        title: "Pola Pikir Bertumbuh Dalam Pembelajaran (Growth Mindset)",
        shortDesc: "Fixed vs growth mindset, neuroplastisitas, Mindset Assessment Profile (MAP), dan power of yet.",

        reflection: {
            connection: `Materi perkuliahan pada topik 1 sampai topik 4 memberikan pemahaman kepada saya sebagai calon guru untuk terus mengembangkan pola pikir bertumbuh dan menjadi contoh bagi peserta didik dalam menghadapi tantangan serta proses belajar.

Pada topik pertama, saya mempelajari pentingnya membangun cara pandang baru melalui penerapan growth mindset dalam dunia pendidikan. Berdasarkan laporan PISA 2018, Indonesia berada di peringkat bawah, sedangkan negara ber-growth mindset tinggi cenderung memiliki rasa takut gagal lebih rendah. Menurut Carol Dweck, terdapat fixed mindset dan growth mindset, terlihat pada 5 area: tantangan, rintangan, usaha, kritik, dan kesuksesan orang lain. Saya juga mempelajari kerangka MAR (Mindset, Action, Result) dan MST (Mindset, Skillset, Toolset).

Pada topik kedua, saya mempelajari cara kerja otak dan neuroplastisitas — kemampuan otak untuk berubah dan berkembang melalui proses belajar dan latihan, yang menunjukkan bahwa growth mindset bukan sekadar konsep filosofis, tetapi didukung bukti ilmiah.

Pada topik ketiga, saya mempelajari Mindset Assessment Profile (MAP) sebagai alat mengidentifikasi kecenderungan mindset, serta strategi cognitive reframing, scaffolding, Opportunity-Based Thinking (OBT), dan asesmen formatif.

Pada topik keempat, saya mempelajari penerapan growth mindset di kelas: pujian yang tepat (menghargai usaha, bukan melabeli kemampuan), konsep power of yet ("belum bisa" bukan "tidak bisa"), serta perbedaan target performa dan target pembelajaran.`,

            challenge: `Materi yang saya pelajari memiliki perbedaan dengan praktik pembelajaran yang selama ini saya lakukan. Sebelumnya, saya cenderung memberikan afirmasi dengan melabeli kemampuan peserta didik (misalnya "pintar" atau "berbakat") tanpa memperhatikan usaha dan proses belajar mereka. Saya juga meyakini kemampuan otak berkembang seiring usia, tetapi pemahaman itu masih sebatas pengalaman pribadi, belum berlandaskan bukti ilmiah. Setelah mempelajari materi perkuliahan, saya menyadari bahwa afirmasi perlu menghargai usaha, proses, dan ketekunan, serta bahwa growth mindset dan perkembangan otak didukung bukti empiris melalui kajian neurosains, khususnya neuroplastisitas.`,

            concept: `1. Pentingnya menerapkan growth mindset serta memahami perbedaannya dengan fixed mindset.
2. Peran guru dalam menumbuhkan growth mindset melalui afirmasi yang tepat dan lingkungan belajar yang mendukung.
3. Cara kerja otak dan konsep neuroplastisitas.
4. Penggunaan strategi dan instrumen: Mindset Assessment Profile (MAP), cognitive reframing, scaffolding, Opportunity-Based Thinking (OBT), asesmen formatif.
5. Penerapan konsep power of yet serta target pembelajaran yang berfokus pada proses.`,

            change: `1. Menerapkan pola pikir bertumbuh dalam pembelajaran dan menjadi teladan bagi peserta didik.
2. Memberikan afirmasi yang berfokus pada usaha, proses, dan perkembangan — bukan label kemampuan.
3. Menciptakan lingkungan belajar yang mendorong keberanian menghadapi tantangan dan tidak takut salah.
4. Menyesuaikan strategi pembelajaran dan asesmen agar mendukung perkembangan setiap peserta didik.
5. Membantu peserta didik memahami bahwa kemampuan dapat berkembang melalui belajar, latihan, dan usaha.`
        },

        artifacts: [
            {
                name: "Tugas Topik 2 — LK 2.2 \"Belajar dari Cara Kerja Otak\"",
                type: "link",
                url: "https://drive.google.com/file/d/1nWIT8LZqDHZOhhlOlOe7nMeKYaSB2a54/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena pada topik ini saya mempelajari dampak dan implikasi neuroplastisitas dalam pembelajaran. Sebelumnya, saya meyakini bahwa kemampuan otak akan berkembang seiring bertambahnya usia dan meningkatnya produktivitas seseorang. Setelah mempelajari materi perkuliahan, saya menyadari bahwa keyakinan tersebut didukung oleh teori dan bukti ilmiah mengenai neuroplastisitas, yaitu kemampuan otak untuk terus berkembang melalui proses belajar dan latihan.

Selain itu, konsep neuroplastisitas berkaitan erat dengan bidang neurosains, yang memiliki hubungan dengan mata kuliah yang saya pelajari saat menempuh pendidikan S1, yaitu Kecerdasan Buatan. Bidang kecerdasan buatan mempelajari cara kerja otak manusia dan proses berpikir sebagai inspirasi dalam pengembangan sistem kecerdasan buatan.`,
        artifactSupport: [
            `Penjelasan mengenai konsep neuroplastisitas yang menunjukkan bahwa otak dapat berkembang melalui proses belajar dan latihan.`,
            `Pembahasan tentang dampak pola pikir terhadap perkembangan dan fungsi otak.`,
            `Implikasi neuroplastisitas dalam praktik pembelajaran.`,
            `Bukti ilmiah dari bidang neurosains yang mendukung konsep growth mindset.`,
            `Keterkaitan konsep neuroplastisitas dengan mata kuliah Kecerdasan Buatan yang pernah dipelajari saat S1.`
        ],

        materials: [],
        documents: [
            {
                name: "Refleksi & Analisis Artefak Pembelajaran — Growth Mindset.pptx",
                type: "pptx",
                url: "assets/documents/refleksi-growth-mindset.pptx",
                description: "Slide presentasi 11 halaman: kerangka 4C, refleksi Connection–Challenge–Concept–Change, dan analisis artefak pembelajaran."
            }
        ]
    },

    {
        id: 5,
        number: "05",
        icon: "🌏",
        title: "Perspektif Sosiokultural dalam Pendidikan Indonesia",
        shortDesc: "Teori Ekologi Bronfenbrenner, Zone of Proximal Development (ZPD), scaffolding, dan Program Indonesia Pintar.",

        reflection: {
            connection: `Materi perkuliahan pada Topik 1 hingga Topik 9 memberikan pemahaman yang komprehensif kepada saya sebagai calon guru mengenai berbagai perspektif dalam Pendidikan Indonesia, khususnya dari sudut pandang sosial, budaya, dan politik.

Topik 1 & 2 membahas Pendidikan Indonesia dari aspek sosial, budaya, ekonomi, politik, serta relevansi nilai-nilai Pancasila.
Topik 3 membahas peran orang tua melalui pola asuh, dukungan masyarakat, dan peran guru sebagai penghubung sekaligus agen perubahan.
Topik 4 membahas konsep dasar Zone of Proximal Development (ZPD) serta faktor sosial, budaya, dan bahasa yang memengaruhi efektivitas pembelajaran.
Topik 5 membahas teori ekologi Bronfenbrenner dan lima sistem ekologi serta pengaruhnya terhadap anak.
Topik 6 mempelajari kebijakan zonasi sebagai disrupsi paradigma pendidikan nasional melalui pendekatan ekologi Bronfenbrenner dan perspektif sosiokultural Vygotsky.
Topik 7 membahas konsep dan prinsip scaffolding berdasarkan ZPD.
Topik 8 meninjau kembali teori ekologi Bronfenbrenner dan penyusunan strategi pembelajaran kontekstual.
Topik 9 membahas isu penerapan ZPD dan Teori Sistem Ekologi Bronfenbrenner dalam implementasi Program Indonesia Pintar (PIP).`,

            challenge: `Sebelum mempelajari mata kuliah ini, saya memahami bahwa perkembangan peserta didik terutama dipengaruhi oleh lingkungan keluarga dan sekolah. Setelah mempelajari materi perkuliahan, pemahaman saya menjadi lebih luas karena perkembangan peserta didik dipengaruhi oleh berbagai faktor — sosial, budaya, lingkungan, ekonomi, dan politik. Saya juga memperoleh pemahaman mengenai Teori Sistem Ekologi Bronfenbrenner, Zone of Proximal Development (ZPD), serta Program Indonesia Pintar (PIP).`,

            concept: `1. Pendidikan dipengaruhi oleh aspek sosial, budaya, ekonomi, politik, serta nilai-nilai Pancasila.
2. Keberhasilan pendidikan memerlukan sinergi antara keluarga, masyarakat, dan guru.
3. Guru perlu memahami Zone of Proximal Development (ZPD) dalam merancang pembelajaran.
4. Scaffolding sebagai strategi memberikan bantuan belajar secara bertahap.
5. Teori Sistem Ekologi Bronfenbrenner — perkembangan peserta didik dipengaruhi berbagai lingkungan yang saling berinteraksi.
6. Guru berperan sebagai fasilitator, penghubung, dan agen perubahan.
7. Program Indonesia Pintar (PIP) sebagai bentuk dukungan pemerintah dalam pemerataan pendidikan.`,

            change: `1. Memahami karakteristik peserta didik dengan mempertimbangkan latar belakang sosial, budaya, keluarga, dan lingkungan.
2. Merancang pembelajaran yang berpusat pada peserta didik.
3. Menerapkan strategi scaffolding dan konsep ZPD.
4. Mengembangkan pembelajaran yang kontekstual.
5. Menjalin komunikasi dan kerja sama dengan orang tua serta masyarakat.
6. Menanamkan nilai-nilai Pancasila dalam pembelajaran.
7. Menciptakan lingkungan belajar yang inklusif dan menghargai keberagaman.
8. Terus mengembangkan kompetensi sebagai calon guru.`
        },

        artifacts: [
            {
                name: "Tugas Topik 9 — LK Individu",
                type: "link",
                url: "https://drive.google.com/file/d/1RgkC-Wm5c2o7dvAeEnNbbozhEX9RuLSa/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: true
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena pada topik ini saya memberikan perhatian khusus terhadap isu-isu penyalahgunaan Program Indonesia Pintar (PIP). Menurut saya, pelaksanaan program ini perlu dievaluasi secara menyeluruh agar bantuan yang diberikan benar-benar tepat sasaran dan tidak disalahgunakan. Analisis menggunakan Teori Sistem Ekologi Bronfenbrenner memberikan sudut pandang yang lebih komprehensif karena mengevaluasi program dari berbagai aspek lingkungan yang memengaruhi keberhasilannya.`,
        artifactSupport: [
            `Analisis terhadap isu pelaksanaan Program Indonesia Pintar (PIP) yang dikaitkan dengan Teori Sistem Ekologi Bronfenbrenner dan Zone of Proximal Development (ZPD) — menunjukkan bahwa satu isu pendidikan dapat dikaji secara komprehensif dengan berbagai teori yang saling melengkapi.`
        ],

        materials: [],
        documents: []
    },

    {
        id: 6,
        number: "06",
        icon: "🏫",
        title: "Praktik Pengalaman Lapangan Terbimbing",
        shortDesc: "Observasi sekolah, asistensi mengajar, praktik mengajar 3 siklus, dan penyusunan e-portofolio.",

        reflection: {
            connection: `Materi perkuliahan pada Topik 1 hingga Topik 5 memberikan pengalaman praktik yang sangat bermanfaat karena mahasiswa terlibat secara langsung di lingkungan sekolah.

Topik 1 merupakan orientasi — observasi manajemen sekolah melalui wawancara kepala sekolah terkait data kurikulum, sumber daya manusia, manajemen anggaran, sistem informasi manajemen ketatalaksanaan, serta sarana dan prasarana.
Topik 2 berfokus pada observasi karakteristik peserta didik, pengamatan pelaksanaan pembelajaran oleh guru, serta observasi lingkungan belajar seperti laboratorium komputer.
Topik 3 berfokus pada asistensi mengajar: penyusunan profil peserta didik, membantu guru pamong menyusun perangkat pembelajaran (RPP/RPM), umpan balik dari guru pamong, evaluasi lembar kerja peserta didik, serta diskusi evaluasi bersama teman sejawat, guru pamong, dan dosen pembimbing lapangan (DPL).
Topik 4 berfokus pada pelaksanaan praktik mengajar sebanyak tiga siklus sesuai jadwal yang disepakati bersama guru pamong.
Topik 5 berfokus pada penyusunan e-portofolio sebagai penilaian UTS dan UAS, memuat refleksi pembelajaran serta kumpulan modul ajar dari Topik 3 dan 4.`,

            challenge: `Salah satu tantangan yang dirasakan selama mengikuti perkuliahan PPL adalah adanya perbedaan yang cukup signifikan dibandingkan praktik pembelajaran pada perkuliahan sebelumnya. Mahasiswa dituntut untuk beradaptasi dengan kondisi nyata di sekolah, memahami karakteristik peserta didik yang beragam, menyesuaikan strategi pembelajaran dengan kebutuhan kelas, serta berkolaborasi secara aktif dengan guru pamong dan warga sekolah — menjadi tantangan sekaligus kesempatan mengembangkan kompetensi pedagogik, profesional, sosial, dan kepribadian.`,

            concept: `1. Memahami manajemen, budaya, dan lingkungan sekolah sebagai dasar pelaksanaan kegiatan pembelajaran.
2. Memahami karakteristik peserta didik untuk merancang pembelajaran yang sesuai.
3. Menyusun perangkat pembelajaran yang sistematis sesuai kurikulum dan tujuan pembelajaran.
4. Menerapkan praktik pembelajaran yang efektif melalui pengelolaan kelas dan asesmen.
5. Melakukan refleksi dan evaluasi pembelajaran secara berkelanjutan.`,

            change: `1. Meningkatkan kemampuan memahami karakteristik dan kebutuhan belajar setiap peserta didik.
2. Menyusun perangkat pembelajaran yang lebih terstruktur, inovatif, dan sesuai kurikulum.
3. Mengembangkan keterampilan mengelola kelas agar pembelajaran lebih efektif dan kondusif.
4. Memanfaatkan media dan teknologi pembelajaran secara optimal.
5. Membiasakan diri melakukan refleksi dan evaluasi setelah setiap kegiatan pembelajaran.`
        },

        artifacts: [
            {
                name: "Tugas Topik 4 — LK Siklus 1 (Modul Ajar)",
                type: "link",
                url: "https://drive.google.com/file/d/1c0OXGe-e85Gg6CzGDI6s81bAlXiwcs2f/view?usp=sharing",
                // description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena memberikan pengalaman yang bermakna dalam menyusun Rencana Pelaksanaan Mendalam (RPM) pada materi jaringan seluler. Pada pembelajaran tersebut, saya menerapkan pendekatan kontekstual dengan memanfaatkan alat peraga sederhana sebagai media visualisasi, sehingga peserta didik lebih mudah memahami konsep yang diajarkan.`,
        artifactSupport: [
            `Rancangan pembelajaran (RPM) beserta penerapan media pembelajaran kontekstual menggunakan alat peraga sederhana — menunjukkan bagaimana perencanaan pembelajaran dapat diimplementasikan secara efektif.`,
            `Umpan balik dari guru pamong serta hasil refleksi setelah pelaksanaan pembelajaran menjadi bukti adanya proses evaluasi dan perbaikan yang mendukung pengembangan kompetensi sebagai calon guru.`
        ],

        materials: [],
        documents: []
    }
];


/* ==================================================================
   2. DATA SEMESTER 2 — kosongkan / isi dengan struktur yang sama
   ------------------------------------------------------------------
   Tambahkan mata kuliah Semester 2 di sini dengan struktur objek
   yang SAMA PERSIS seperti array `courses` di atas. Section
   "Coming Soon" akan otomatis berganti menjadi daftar kartu begitu
   array ini berisi data.
   ================================================================== */
const coursesSemester2 = [

    /* ---------- 01. PEMBELAJARAN MENDALAM DAN ASESMEN LANJUT ---------- */
    {
        id: "s2-1",
        number: "01",
        icon: "📝",
        title: "Pembelajaran Mendalam dan Asesmen Lanjut",
        shortDesc: "Asesmen awal kognitif (C1–C3) dan nonkognitif untuk memetakan kebutuhan belajar peserta didik.",

        reflection: {
            connection: `Sebelum mengajar, saya perlu mengenali kemampuan dan karakteristik peserta didik melalui asesmen awal. Setiap peserta didik unik dalam kemampuan, minat, gaya belajar, motivasi, dan kondisi sosial emosionalnya.

Pada asesmen kognitif, saya belajar menyusun soal berdasarkan tingkat C1 sampai C3 dengan tujuan yang jelas agar hasilnya dapat diinterpretasikan. Selain tes tertulis, asesmen awal juga dapat berupa tanya jawab lisan, wawancara, observasi kinerja, dan portofolio. Pada asesmen nonkognitif, saya mempelajari cara mengetahui gaya belajar, minat, motivasi, dan kondisi sosial emosional.

Data asesmen dianalisis untuk menemukan pola umum maupun kebutuhan khusus, lalu menjadi dasar tindak lanjut: mengelompokkan kebutuhan, memilih metode dan media, mendampingi peserta didik yang membutuhkan, serta memberi pengayaan bagi yang sudah lebih siap. Asesmen awal bukan sekadar untuk mendapatkan nilai, tetapi dasar merancang pembelajaran yang bermakna.`,

            challenge: `Berdasarkan pengalaman praktik mengajar sebelumnya, saya belum terbiasa melakukan asesmen awal secara menyeluruh dan lebih berfokus pada penyampaian materi. Setelah mempelajari materi ini, saya menyadari pentingnya asesmen awal, sekaligus tantangan untuk belajar menyusun instrumen, menganalisis hasil asesmen, dan menentukan tindak lanjut yang sesuai.`,

            concept: `1. Asesmen awal dilakukan sebelum pembelajaran untuk mengetahui kondisi kognitif dan nonkognitif peserta didik.
2. Aspek yang dipetakan: kemampuan awal, minat, motivasi, gaya belajar, serta kondisi sosial emosional.
3. Hasil asesmen dianalisis untuk menemukan pola kebutuhan belajar.
4. Hasil analisis menjadi dasar menentukan strategi, metode, media, dan tindak lanjut pembelajaran.`,

            change: `1. Membiasakan diri melakukan asesmen awal sebelum melaksanakan pembelajaran.
2. Mengetahui kondisi kognitif dan nonkognitif peserta didik, lalu menganalisis hasilnya.
3. Menggunakan hasil asesmen sebagai dasar menentukan strategi, metode, dan media pembelajaran.
4. Merancang pembelajaran yang sesuai dengan karakteristik dan kebutuhan peserta didik.`
        },

        artifacts: [
            {
                name: "Tugas Topik 1C — Asesmen Awal",
                type: "link",
                url: "https://drive.google.com/file/d/1R1AIXVfx5nVsdgFboRk24xt56eKQxGR-/view?usp=sharing",
                preview: false
            }
        ],
        artifactWhy: `Artefak ini saya pilih karena materinya baru bagi saya. Sebelumnya saya berfokus pada cara menyampaikan materi, tetapi melalui topik ini saya belajar bahwa sebelum mengajar, guru perlu mengenali peserta didik terlebih dahulu, baik kognitif maupun nonkognitifnya. Saya juga belajar bahwa setiap soal asesmen perlu memiliki tujuan yang jelas, misalnya disusun pada tingkat C1–C2 agar sesuai dengan kemampuan yang ingin diketahui. Pemahaman baru ini dapat langsung saya gunakan dalam praktik mengajar.`,
        artifactSupport: [
            `Bagian asesmen awal, khususnya pembahasan asesmen kognitif dan nonkognitif — menjelaskan bahwa asesmen awal mengungkap kemampuan awal, minat, motivasi, gaya belajar, dan kondisi sosial emosional peserta didik.`,
            `Hasil asesmen dianalisis untuk mengetahui kebutuhan peserta didik dan menjadi dasar strategi serta tindak lanjut pembelajaran — mendukung refleksi bahwa guru perlu mengenali karakteristik peserta didik sebelum mengajar.`
        ],

        materials: [],
        documents: []
    },

    /* ---------- 02. PEMBELAJARAN SOSIAL DAN EMOSIONAL ---------- */
    {
        id: "s2-2",
        number: "02",
        icon: "💙",
        title: "Pembelajaran Sosial dan Emosional",
        shortDesc: "Lima kompetensi CASEL: kesadaran diri, pengelolaan diri, kesadaran sosial, keterampilan relasi, dan pengambilan keputusan bertanggung jawab.",

        reflection: {
            connection: `Perkembangan peserta didik tidak hanya dilihat dari kemampuan akademik, tetapi juga dari kondisi sosial dan emosionalnya. Karena itu, sebagai calon guru saya perlu memahami dan menerapkan Pembelajaran Sosial Emosional (PSE) berdasarkan kerangka CASEL, yang memiliki lima komponen:

1. Kesadaran Diri (Self-Awareness): mengenali emosi, pikiran, dan kondisi diri sendiri.
2. Pengelolaan Diri (Self-Management): mengatur emosi, pikiran, dan perilaku, misalnya tidak langsung menyerah atau marah saat tugas sulit.
3. Kesadaran Sosial (Social Awareness): memahami sudut pandang dan berempati kepada orang lain.
4. Keterampilan Relasi (Relationship Skills): membangun hubungan sehat melalui komunikasi, mendengarkan, dan bekerja sama.
5. Pengambilan Keputusan yang Bertanggung Jawab (Responsible Decision-Making): membuat pilihan tepat dengan mempertimbangkan konsekuensi.

Kelima komponen ini membantu saya menciptakan suasana pembelajaran yang lebih nyaman dan positif, agar peserta didik berkembang secara akademik sekaligus mampu mengelola emosi, berinteraksi dengan baik, dan mengambil keputusan yang bertanggung jawab.`,

            challenge: `Berdasarkan pengalaman praktik mengajar sebelumnya, saya masih lebih berfokus pada penyampaian materi dan pengelolaan kelas. Ketika peserta didik gaduh, saya lebih memikirkan cara agar kelas kembali kondusif tanpa memperhatikan kondisi emosi peserta didik maupun emosi saya sendiri. Penerapan PSE menuntut perubahan cara saya menghadapi dan merespons situasi di kelas.`,

            concept: `1. PSE berkaitan dengan perkembangan peserta didik sekaligus kemampuan guru mengelola diri dan membangun hubungan baik dengan peserta didik.
2. PSE memiliki lima kompetensi utama CASEL.
3. PSE dapat diterapkan melalui diskusi, kerja kelompok, bermain peran, dan pembiasaan di lingkungan sekolah.`,

            change: `1. Lebih memperhatikan kondisi sosial dan emosional peserta didik selama pembelajaran.
2. Mengenali kondisi peserta didik terlebih dahulu dan tidak langsung bereaksi pada situasi kelas yang kurang kondusif.
3. Belajar mengelola emosi diri serta berkomunikasi dengan lebih tenang dan tegas.
4. Menerapkan lima kompetensi PSE dalam pembelajaran.`
        },

        artifacts: [
            {
                name: "Tugas UTS — RPM Berbasis PSE (CASEL)",
                type: "link",
                url: "https://drive.google.com/file/d/1yJA04hbbLhjmrMBemzfHZX4Agw-UWdWo/view?usp=sharing",
                preview: false
            }
        ],
        artifactWhy: `Artefak ini saya pilih karena memberi kesempatan menerapkan teori PSE berdasarkan kerangka CASEL. Saya merancang RPM yang memuat lima kompetensi CASEL dan memberi label pada kegiatan pembelajaran untuk menunjukkan kompetensi PSE yang diterapkan. RPM ini dapat menjadi panduan praktik PSE di kelas, sehingga artefak ini menghubungkan teori yang dipelajari dengan praktik pembelajaran.`,
        artifactSupport: [
            `Bagian perancangan RPM yang menerapkan lima kompetensi CASEL — kesadaran diri, pengelolaan diri, kesadaran sosial, keterampilan relasi, dan pengambilan keputusan yang bertanggung jawab.`,
            `Pelabelan kegiatan pembelajaran sesuai kompetensi CASEL — menunjukkan bagaimana teori PSE diwujudkan dalam kegiatan nyata dan menjadi dasar praktik mengajar.`
        ],

        materials: [],
        documents: []
    },

    /* ---------- 03. PROJEK KEPEMIMPINAN ---------- */
    {
        id: "s2-3",
        number: "03",
        icon: "🚀",
        title: "Projek Kepemimpinan",
        shortDesc: "Perspective Taking (See, Think, Wonder), SDGs, dan perancangan projek untuk solusi permasalahan nyata.",

        reflection: {
            connection: `Guru tidak hanya mengajar, tetapi juga perlu memimpin, bekerja sama, berkomunikasi, dan menyelesaikan masalah. Melalui mata kuliah ini, saya belajar bahwa kepemimpinan dapat dikembangkan lewat pengalaman langsung merancang dan menjalankan projek untuk menghasilkan solusi nyata.

Pada Topik 1, saya mempelajari Perspective Taking melalui tahap Tuning In:
• See (Mengamati): mengamati kondisi nyata tanpa asumsi, misalnya sampah menumpuk dan tempat sampah belum digunakan dengan baik.
• Think (Berpikir): memahami kemungkinan penyebab, misalnya tempat sampah kurang, masyarakat belum memilah sampah, atau pengangkutan tidak rutin.
• Wonder (Bertanya): memunculkan pertanyaan dan ide solusi, misalnya "Bagaimana jika dibuat tempat sampah yang membantu memilah sampah?"

Pada Topik 2, saya mempelajari SDGs (Sustainable Development Goals), yaitu 17 tujuan global hingga tahun 2030, sebagai dasar menentukan masalah dan manfaat projek. Contohnya, projek pengelolaan sampah dikaitkan dengan SDG 12 tentang konsumsi dan produksi yang bertanggung jawab.`,

            challenge: `Berdasarkan pengalaman praktik mengajar sebelumnya, saya lebih berfokus pada pembelajaran di dalam kelas dan belum terbiasa merancang serta mengelola projek yang berangkat dari permasalahan nyata. Saya juga belum terbiasa melihat masalah dari berbagai sudut pandang melalui See, Think, dan Wonder. Materi ini menantang karena menuntut kemampuan bekerja sama, mengelola projek, dan menghasilkan solusi bermanfaat.`,

            concept: `1. Kepemimpinan dapat dikembangkan melalui pengalaman langsung merancang dan menjalankan projek untuk masalah nyata.
2. Perspective Taking (See, Think, Wonder) membantu mengamati kondisi, memahami masalah, dan menemukan pertanyaan atau solusi.
3. SDGs menjadi dasar menentukan arah dan manfaat projek.
4. Calon guru perlu mampu memimpin, bekerja sama, berkomunikasi, dan menyelesaikan masalah.`,

            change: `1. Lebih mampu memahami permasalahan sebelum menentukan tindakan atau solusi.
2. Membiasakan tahapan See, Think, dan Wonder agar tidak mengambil keputusan berdasarkan asumsi.
3. Lebih aktif bekerja sama, berkomunikasi, dan mengambil peran dalam projek.
4. Mempertimbangkan SDGs dalam menentukan tujuan dan manfaat projek.`
        },

        artifacts: [
            {
                name: "Tugas UTS — Rancangan Produk Pemilah Sampah Otomatis",
                type: "link",
                url: "https://drive.google.com/file/d/1f1rAqItGaU8wHL1Gyg9pXvugXaPp2K3L/view?usp=sharing",
                preview: false
            }
        ],
        artifactWhy: `Artefak ini saya pilih karena saya belajar menyusun rancangan produk berdasarkan masalah yang ditemukan melalui See, Think, dan Wonder, serta menentukan tujuan projek berdasarkan SDGs. Saya juga belajar membagi peran anggota agar setiap anggota berkontribusi. Artefak berupa produk pemilah sampah otomatis dan media edukasi interaktif sebagai solusi pengelolaan sampah, sehingga menunjukkan penerapan materi dalam projek nyata.`,
        artifactSupport: [
            `Bagian rancangan produk pemilah sampah otomatis dan edukasi interaktif yang menerapkan See, Think, Wonder — menunjukkan saya memahami masalah terlebih dahulu sebelum merancang solusi.`,
            `Pembagian peran dalam projek — menunjukkan kerja sama dengan anggota kelompok dalam menjalankan projek.`
        ],

        materials: [],
        documents: []
    },

    /* ---------- 04. SEMINAR PROFESI PENDIDIKAN GURU ---------- */
    {
        id: "s2-4",
        number: "04",
        icon: "🎓",
        title: "Seminar Profesi Pendidikan Guru",
        shortDesc: "Menghubungkan pengalaman belajar Semester I dan II menjadi karya inovasi dan portofolio refleksi.",

        reflection: {
            connection: `Seminar PPG berkaitan erat dengan pengalaman belajar saya selama Semester I dan II. Melalui refleksi 4C, saya tidak hanya mengingat materi, tetapi juga memahami pengalaman, tantangan, konsep, dan perubahan yang saya dapatkan. Pengalaman tersebut menjadi bekal merancang pembelajaran, memahami karakteristik peserta didik, menggunakan media, menyelesaikan masalah, dan bekerja sama. Semuanya saya hubungkan dalam perancangan karya inovasi, seperti desain pembelajaran, video pendidikan, multimedia interaktif, atau alat peraga edukatif, yang relevan dengan kebutuhan pembelajaran.`,

            challenge: `Sebelumnya saya lebih berfokus pada merancang dan melaksanakan pembelajaran agar peserta didik memahami materi. Saya belum terbiasa menghubungkan pengalaman dan pengetahuan dari berbagai mata kuliah menjadi karya inovasi sebagai solusi pembelajaran. Dalam Seminar PPG, saya perlu meninjau kembali pengalaman Semester I dan II, memilih pengetahuan yang relevan, dan menggabungkannya menjadi karya yang bermanfaat.`,

            concept: `1. Pengalaman dan pengetahuan dari berbagai mata kuliah dapat dihubungkan menjadi karya inovasi yang sesuai kebutuhan pembelajaran.
2. Membuat karya inovasi memerlukan kemampuan mengidentifikasi masalah, menentukan solusi, merancang produk, dan menyesuaikannya dengan karakteristik peserta didik.
3. Teori perkuliahan tidak hanya dipahami sebagai konsep, tetapi dapat diterapkan menjadi karya nyata.`,

            change: `1. Lebih mampu menghubungkan pengetahuan dan pengalaman dari berbagai mata kuliah untuk diterapkan dalam pembelajaran.
2. Tidak hanya memahami teori, tetapi mencari cara menerapkannya dalam karya atau solusi sesuai kebutuhan peserta didik.
3. Lebih kreatif dan berani mencoba membuat karya inovasi.
4. Memanfaatkan pengalaman Semester I dan II untuk mengembangkan pembelajaran yang lebih bermakna.`
        },

        artifacts: [
            {
                name: "Portofolio Seminar PPG",
                type: "link",
                url: "https://anommudita.github.io/seminar-ppg/",
                preview: false
            }
        ],
        artifactWhy: `Artefak ini saya pilih karena berupa portofolio refleksi pengalaman belajar selama Semester I dan II. Berbagai pengalaman, proses, tantangan, dan perubahan yang saya alami terdokumentasi dengan baik, sekaligus menjadi gambaran bagi orang lain tentang perjalanan belajar saya selama PPG. Portofolio ini bukan hanya hasil refleksi, tetapi juga dokumentasi perjalanan belajar saya sebagai calon guru.`,
        artifactSupport: [
            `Bagian portofolio yang memuat refleksi pengalaman belajar Semester I dan II — menunjukkan pengalaman, tantangan, konsep, dan perubahan selama perkuliahan.`,
            `Dokumentasi hasil karya dan kegiatan — menunjukkan proses belajar yang telah dilalui secara nyata dan dapat dilihat orang lain.`
        ],

        materials: [],
        documents: []
    },

    /* ---------- 05. TRI HITA KARANA ---------- */
    {
        id: "s2-5",
        number: "05",
        icon: "🌺",
        title: "Tri Hita Karana",
        shortDesc: "Parahyangan, Pawongan, dan Palemahan sebagai kearifan lokal Bali dalam pembelajaran dan budaya sekolah.",

        reflection: {
            connection: `Guru tidak hanya menyampaikan materi, tetapi juga membentuk karakter dan menanamkan nilai kebaikan. Tri Hita Karana adalah kearifan lokal Bali yang perlu dilestarikan dan diterapkan sehari-hari, termasuk di sekolah, melalui tiga konsep: Parahyangan (hubungan dengan Tuhan), Pawongan (hubungan dengan sesama manusia), dan Palemahan (hubungan dengan lingkungan).

Hal ini berkaitan dengan pengalaman mengajar saya di SMP Negeri 2 Singaraja. Saya mengamati bahwa kerja sama antarpeserta didik masih perlu dikembangkan dan kesadaran menjaga kebersihan kantin perlu ditingkatkan. Nilai kearifan lokal tidak cukup dipelajari secara teori, tetapi perlu diwujudkan melalui kebiasaan dan tindakan nyata, dengan guru sebagai teladan.`,

            challenge: `Tantangan bagi saya adalah memahami bahwa pendidikan tidak hanya berfokus pada capaian akademik, tetapi juga pembentukan karakter melalui nilai kearifan lokal. Selama ini saya lebih berfokus pada penyampaian materi dan penyelesaian tugas. Tantangannya adalah mengintegrasikan nilai Tri Hita Karana secara konsisten, tidak sekadar teori atau formalitas, misalnya melalui kebiasaan saling membantu, menghargai perbedaan, menjaga kebersihan, dan bertanggung jawab terhadap lingkungan sekolah.`,

            concept: `1. Parahyangan: menjaga hubungan dengan Tuhan melalui kegiatan spiritual dan pembentukan karakter.
2. Pawongan: hubungan harmonis antarmanusia melalui saling menghargai, toleransi, kerja sama, dan kepedulian.
3. Palemahan: menjaga lingkungan melalui kebersihan, pengurangan sampah, dan pelestarian alam.
4. Penerapan di SMP Negeri 2 Singaraja: Tri Sandya bersama, kerja sama dan tutor sebaya, serta program Ketahanan Pangan (menanam dan merawat sayuran).
5. Keberhasilan penerapan membutuhkan keteladanan guru, pembiasaan yang konsisten, dan keterlibatan seluruh warga sekolah.`,

            change: `1. Mengintegrasikan nilai Parahyangan, Pawongan, dan Palemahan ke dalam pembelajaran dan budaya sekolah.
2. Menjadi teladan dan membangun kebiasaan positif bersama peserta didik.
3. Merancang kegiatan yang membantu peserta didik menerapkan nilai Tri Hita Karana dalam kehidupan nyata.
4. Mendorong peserta didik peduli terhadap sesama, bertanggung jawab, dan melestarikan kearifan lokal Bali.`
        },

        artifacts: [
            {
                name: "Tugas UTS THK — RPM Kasus Komersialisasi Konten Subak Bali",
                type: "link",
                url: "https://drive.google.com/file/d/1PVLzjHWbtxJa3V6maNZu1MVJh-PyKFWG/view?usp=sharing",
                preview: false
            }
        ],
        artifactWhy: `Saya memilih RPM berbasis kasus komersialisasi konten Subak Bali karena relevan dengan perkembangan teknologi digital dan fenomena media sosial. Kasus ini menunjukkan teknologi dapat mempromosikan budaya Bali, tetapi juga berpotensi menimbulkan masalah bila digunakan tanpa memperhatikan etika, kepentingan masyarakat, dan kelestarian lingkungan.

Melalui RPM ini, saya mengintegrasikan tiga aspek Tri Hita Karana ke dalam pembelajaran Informatika agar peserta didik tidak sekadar mengikuti tren viral, tetapi memahami dampak konten digital dan mampu merancang langkah mitigasi.`,
        artifactSupport: [
            `Analisis kasus komersialisasi konten Subak Bali berdasarkan tiga aspek Tri Hita Karana, literasi digital, dan tanggung jawab pihak-pihak terkait — menunjukkan konten viral dapat menimbulkan persoalan budaya, sosial, dan lingkungan.`,
            `Perancangan RPM yang mengintegrasikan Parahyangan, Pawongan, dan Palemahan — melatih peserta didik berpikir kritis, memahami dampak teknologi, dan merancang langkah mitigasi.`
        ],

        materials: [],
        documents: []
    },

    /* ---------- 06. PPL MANDIRI ---------- */
    {
        id: "s2-6",
        number: "06",
        icon: "🏫",
        title: "Praktik Pengalaman Lapangan Mandiri",
        shortDesc: "Penerapan TaRL, CRT, dan UDL dalam praktik mengajar Informatika di SMP Negeri 2 Singaraja.",

        reflection: {
            connection: `PPL Mandiri (Topik 1–5) menghubungkan teori perkuliahan dengan praktik nyata di sekolah: manajemen sekolah, karakteristik peserta didik, lingkungan belajar, penyusunan perangkat pembelajaran, praktik mengajar, serta evaluasi dan refleksi.

Saya juga mempelajari dan menerapkan tiga pendekatan:
• TaRL (Teaching at the Right Level): menyesuaikan pembelajaran dengan tingkat kemampuan peserta didik.
• CRT (Culturally Responsive Teaching): menghubungkan pembelajaran dengan latar belakang budaya dan pengalaman peserta didik.
• UDL (Universal Design for Learning): menyediakan beragam cara mengakses materi, terlibat, dan menunjukkan hasil belajar.

Pengalaman ini memperkuat pemahaman saya bahwa pembelajaran perlu berpusat pada peserta didik, inklusif, dan sesuai kebutuhan belajar mereka.`,

            challenge: `Tantangan saya adalah menerapkan teori pedagogik dalam kondisi pembelajaran nyata yang beragam: memahami karakteristik dan kemampuan peserta didik, mengelola kelas, dan menentukan strategi yang sesuai. Penerapan TaRL, CRT, dan UDL menuntut saya merancang pembelajaran dengan lebih cermat agar tidak semua peserta didik diperlakukan sama. Saya juga perlu memastikan setiap peserta didik dapat berpartisipasi aktif melalui asesmen awal, konteks yang dekat dengan kehidupan mereka, variasi media dan aktivitas, serta pendampingan.`,

            concept: `1. Memahami lingkungan sekolah, karakteristik peserta didik, dan merancang perangkat pembelajaran.
2. Melaksanakan pembelajaran secara efektif serta melakukan evaluasi dan refleksi berkelanjutan.
3. TaRL: pembelajaran sesuai tingkat kemampuan aktual peserta didik.
4. CRT: pembelajaran kontekstual yang terhubung dengan budaya dan pengalaman peserta didik.
5. UDL: beragam cara penyajian informasi, keterlibatan, dan penunjukan hasil belajar.`,

            change: `1. Lebih memperhatikan karakteristik dan kemampuan awal peserta didik melalui asesmen.
2. Mengembangkan pembelajaran kontekstual yang terhubung dengan budaya, lingkungan, dan pengalaman peserta didik.
3. Menyediakan variasi media, metode, dan aktivitas sesuai prinsip UDL.
4. Meningkatkan kemampuan mengelola kelas dan memberikan pendampingan yang tepat.
5. Membiasakan refleksi setelah pembelajaran agar menjadi guru yang adaptif dan reflektif.`
        },

        artifacts: [
            {
                name: "Tugas Topik 4 — LK Siklus 4 (Modul Ajar)",
                type: "link",
                url: "https://drive.google.com/file/d/1D0i1BmCScn0RH_0VeFk53KWptPLVxvhU/view?usp=sharing",
                preview: false
            }
        ],
        artifactWhy: `Saya memilih LK 4 Refleksi Praktik Pembelajaran Mandiri (Siklus 4) karena menggambarkan pengalaman nyata mengajar Informatika di SMP Negeri 2 Singaraja, khususnya literasi digital tentang perancangan dan pembuatan blog. Saya menemukan tantangan seperti keterbatasan fasilitas laboratorium, perbedaan perangkat peserta didik, dan kesulitan merancang tampilan blog secara manual.

Artefak ini juga memuat refleksi dan rencana perbaikan, seperti video tutorial untuk laptop dan HP serta penggunaan Figma sebagai alternatif perancangan blog. Pengalaman ini membantu saya menerapkan TaRL, UDL, dan CRT, serta belajar menjadi guru yang reflektif dan terbuka terhadap umpan balik.`,
        artifactSupport: [
            `Uraian pelaksanaan pembelajaran literasi digital (perancangan dan pembuatan blog) — kelas IX.1 lebih aktif dan tertib, kelas IX.5 lebih tertarik praktik, sebagian peserta didik kesulitan mengikuti tutorial karena perangkat berbeda dan belum menyelesaikan blog karena keterbatasan perangkat di rumah.`,
            `Umpan balik guru pamong dan rencana tindak lanjut — video tutorial yang dapat diakses lewat laptop maupun HP serta Figma sebagai alternatif; mendukung refleksi tentang pembelajaran yang fleksibel (UDL), sesuai tingkat kemampuan (TaRL), dan kontekstual (CRT).`
        ],

        materials: [],
        documents: []
    }

];



/* ==================================================================
   3. RENDER CARDS — kartu mata kuliah di grid Semester 1
   ================================================================== */
const courseGrid = document.getElementById("courseGrid");
const courseGridEmpty = document.getElementById("courseGridEmpty");
const courseGridSemester2 = document.getElementById("coursesSemester2");
const courseGridEmptySemester2 = document.getElementById("courseGridEmptySemester2");

function renderCourseCards(list, grid = courseGrid, emptyEl = courseGridEmpty, emptyText = "") {
    grid.innerHTML = "";

    if (list.length === 0) {
        if (emptyText) emptyEl.textContent = emptyText;
        emptyEl.hidden = false;
        return;
    }
    emptyEl.hidden = true;

    list.forEach((course, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "course-card";
        card.style.transitionDelay = `${index * 60}ms`;
        card.setAttribute("data-course-id", course.id);
        card.setAttribute("aria-haspopup", "dialog");
        card.innerHTML = `
            <div class="course-card__top">
                <span class="course-card__number">Mata Kuliah ${course.number}</span>
                <span class="course-card__icon" aria-hidden="true">${course.icon}</span>
            </div>
            <h3 class="course-card__title">${course.title}</h3>
            <p class="course-card__desc">${course.shortDesc}</p>
            <span class="course-card__cta">
                Lihat Detail
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
        `;
        card.addEventListener("click", () => openCourseModal(course.id));
        grid.appendChild(card);
        // trigger reveal animation for dynamically-added cards
        requestAnimationFrame(() => {
            observeReveal(card);
        });
    });
}

renderCourseCards(courses);

// Semester 2
renderCourseCards(
    coursesSemester2,
    courseGridSemester2,
    courseGridEmptySemester2,
    "Mata kuliah Semester 2 belum ditambahkan."
);




/* ==================================================================
   4. COURSE MODAL — halaman detail mata kuliah (single-page)
   ================================================================== */
const courseModal = document.getElementById("courseModal");
const courseModalBackdrop = document.getElementById("courseModalBackdrop");
const modalBackBtn = document.getElementById("modalBackBtn");

const modalCourseNumber = document.getElementById("modalCourseNumber");
const modalCourseTitle = document.getElementById("modalCourseTitle");
const modalCourseDesc = document.getElementById("modalCourseDesc");
const c4Grid = document.getElementById("c4Grid");
const modalMaterialContent = document.getElementById("modalMaterialContent");
const modalArtifactList = document.getElementById("modalArtifactList");
const modalArtifactWhy = document.getElementById("modalArtifactWhy");
const modalArtifactSupport = document.getElementById("modalArtifactSupport");
const modalDocumentViewer = document.getElementById("modalDocumentViewer");

const C4_META = [
    { key: "connection", label: "Connection", subtitle: "Keterkaitan Materi dengan Peran Calon Guru", color: "#1e3a8a" },
    { key: "challenge", label: "Challenge", subtitle: "Hal yang Berbeda dari Praktik Selama Ini", color: "#2563eb" },
    { key: "concept", label: "Concept", subtitle: "Konsep Utama yang Dipelajari sebagai Calon Guru", color: "#f59e0b" },
    { key: "change", label: "Change", subtitle: "Perubahan yang Ingin Dilakukan", color: "#0f766e" }
];

const FILE_ICONS = { pdf: "📄", pptx: "📊", ppt: "📊", docx: "📃", doc: "📃", image: "🖼️", video: "🎬", link: "🔗" };

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function findCourseById(id) {
    return [...courses, ...coursesSemester2].find(c => String(c.id) === String(id));
}

function openCourseModal(courseId) {
    const course = findCourseById(courseId);
    if (!course) return;

    modalCourseNumber.textContent = `Mata Kuliah ${course.number}`;
    modalCourseTitle.textContent = course.title;
    modalCourseDesc.textContent = course.shortDesc;

    // --- Render 4C cards ---
    c4Grid.innerHTML = C4_META.map(meta => `
        <article class="c4-card" style="--c4-color:${meta.color}">
            <span class="c4-card__badge">${meta.label[0]}${meta.key === "challenge" ? "2" : meta.key === "connection" ? "1" : meta.key === "concept" ? "3" : "4"}</span>
            <h4 class="c4-card__title">${meta.label}</h4>
            <p class="c4-card__subtitle">${meta.subtitle}</p>
            <div class="c4-card__body"><p>${escapeHtml(course.reflection[meta.key] || "Refleksi belum diisi.").replace(/\n/g, "<br>")}</p></div>
        </article>
    `).join("");

    // --- Render materi (placeholder-friendly) ---
    if (course.materials && course.materials.length > 0) {
        modalMaterialContent.innerHTML = course.materials.map(m => `
            <div class="material-item">
                <strong>${escapeHtml(m.title || "Materi")}</strong>
                <p>${escapeHtml(m.content || "")}</p>
            </div>
        `).join("");
    } else {
        modalMaterialContent.innerHTML = "";
    }

    // --- Render artefak (bukti dukung) ---
    modalArtifactList.innerHTML = (course.artifacts || []).map(a => renderArtifactCard(a)).join("")
        || `<p class="doc-hint">Belum ada artefak yang ditambahkan.</p>`;

    // --- Mengapa artefak dipilih ---
    modalArtifactWhy.innerHTML = course.artifactWhy
        ? `<p>${escapeHtml(course.artifactWhy).replace(/\n/g, "<br>")}</p>`
        : `<p>Belum diisi.</p>`;

    // --- Bagian yang mendukung refleksi ---
    if (course.artifactSupport && course.artifactSupport.length > 0) {
        modalArtifactSupport.innerHTML = course.artifactSupport
            .map(item => `<div class="artifact-support__item">${escapeHtml(item)}</div>`)
            .join("");
    } else {
        modalArtifactSupport.innerHTML = `<p>Belum diisi.</p>`;
    }

    // --- Dokumen ---
    modalDocumentViewer.innerHTML = (course.documents || []).map(d => renderArtifactCard(d)).join("");

    // Reset ke tab pertama
    switchTab("refleksi");

    courseModal.classList.add("is-open");
    courseModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalBackBtn.focus();

    // update URL hash tanpa memicu scroll (memudahkan share/edit)
    history.replaceState(null, "", `#course-${course.id}`);
}

function renderArtifactCard(item) {
    const icon = FILE_ICONS[item.type] || "📎";
    const hasUrl = item.url && item.url.trim() !== "";
    return `
        <div class="artifact-card">
            <div class="artifact-card__top">
                <span class="artifact-card__icon" aria-hidden="true">${icon}</span>
                <div>
                    <p class="artifact-card__name">${escapeHtml(item.name)}</p>
                    <span class="artifact-card__type">${escapeHtml(item.type)}</span>
                </div>
            </div>
            <p class="artifact-card__desc">${escapeHtml(item.description || "")}</p>
            <div class="artifact-card__actions">
                <button type="button" class="btn btn--small btn--accent-outline" data-preview-file
                    data-name="${escapeHtml(item.name)}" data-type="${escapeHtml(item.type)}" data-url="${escapeHtml(item.url || "")}"
                    ${hasUrl ? "" : "disabled"}>
                    Baca / Lihat
                </button>
                ${hasUrl
            ? `<a class="btn btn--small btn--ghost" href="${escapeHtml(item.url)}" download target="${item.type === "link" ? "_blank" : "_self"}" rel="noopener">Download</a>`
            : `<span class="btn btn--small btn--ghost" style="opacity:.5;pointer-events:none;">Belum ada file</span>`}
            </div>
        </div>
    `;
}

function closeCourseModal() {
    courseModal.classList.remove("is-open");
    courseModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    history.replaceState(null, "", window.location.pathname + window.location.search);
}

courseModalBackdrop.addEventListener("click", closeCourseModal);
modalBackBtn.addEventListener("click", closeCourseModal);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (courseModal.classList.contains("is-open")) closeCourseModal();
        if (previewModal.classList.contains("is-open")) closePreviewModal();
    }
});

// Tabs
const tabButtons = document.querySelectorAll(".course-tabs__btn");
const tabPanels = document.querySelectorAll(".course-tabpanel");

function switchTab(tabName) {
    tabButtons.forEach(btn => {
        const active = btn.dataset.tab === tabName;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
    });
    tabPanels.forEach(panel => {
        panel.classList.toggle("is-active", panel.dataset.tabpanel === tabName);
    });
}

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});


/* ==================================================================
   5. PREVIEW MODAL — tombol "Baca / Lihat" pada kartu artefak
   ================================================================== */
const previewModal = document.getElementById("previewModal");
const previewModalBackdrop = document.getElementById("previewModalBackdrop");
const previewModalClose = document.getElementById("previewModalClose");
const previewModalTitle = document.getElementById("previewModalTitle");
const previewModalBody = document.getElementById("previewModalBody");

function openPreviewModal(name, type, url) {
    previewModalTitle.textContent = name;

    let inner = "";
    const ext = (type || "").toLowerCase();

    if (!url) {
        inner = `<div class="preview-fallback"><p>File belum ditambahkan. Tambahkan path file pada properti <code>url</code> di data mata kuliah (script.js).</p></div>`;
    } else if (ext === "pdf") {
        inner = `<iframe src="${escapeHtml(url)}" title="Pratinjau PDF: ${escapeHtml(name)}"></iframe>`;
    } else if (ext === "image" || ext === "jpg" || ext === "jpeg" || ext === "png") {
        inner = `<img src="${escapeHtml(url)}" alt="${escapeHtml(name)}">`;
    } else if (ext === "video") {
        inner = `<video src="${escapeHtml(url)}" controls></video>`;
    } else if (ext === "link") {
        window.open(url, "_blank", "noopener");
        return;
    } else {
        // pptx, docx, dan tipe lain yang tidak bisa dirender native browser tanpa backend
        inner = `<div class="preview-fallback">
            <p>Format <strong>${escapeHtml(ext.toUpperCase())}</strong> tidak dapat ditampilkan langsung di browser tanpa layanan pihak ketiga.</p>
            <a class="btn btn--primary" href="${escapeHtml(url)}" download style="margin-top:14px;">Download File</a>
        </div>`;
    }

    previewModalBody.innerHTML = inner;
    previewModal.classList.add("is-open");
    previewModal.setAttribute("aria-hidden", "false");
}

function closePreviewModal() {
    previewModal.classList.remove("is-open");
    previewModal.setAttribute("aria-hidden", "true");
    previewModalBody.innerHTML = "";
}

previewModalBackdrop.addEventListener("click", closePreviewModal);
previewModalClose.addEventListener("click", closePreviewModal);

// Delegasi klik untuk semua tombol "Baca / Lihat" (dirender dinamis)
document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-preview-file]");
    if (!btn || btn.disabled) return;
    openPreviewModal(btn.dataset.name, btn.dataset.type, btn.dataset.url);
});


/* ==================================================================
   6. NAVBAR — scroll state, smooth-scroll link, active section, mobile menu
   ================================================================== */
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

function updateNavbarScrollState() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 24);
}
updateNavbarScrollState();
window.addEventListener("scroll", updateNavbarScrollState, { passive: true });

hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-open", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
});

// Smooth scroll untuk semua link bertanda data-nav-link
document.querySelectorAll("[data-nav-link]").forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
        // tutup mobile menu setelah navigasi
        mobileMenu.classList.remove("is-open");
        hamburgerBtn.classList.remove("is-open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    });
});

// Active nav link berdasarkan posisi section (scroll-spy)
const navLinks = document.querySelectorAll(".navbar__link, .mobile-menu__link");
const sections = ["tentang", "semester1", "semester2"].map(id => document.getElementById(id)).filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle("is-active", link.dataset.target === id);
            });
        }
    });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach(section => sectionObserver.observe(section));


/* ==================================================================
   7. DARK MODE TOGGLE
   ================================================================== */
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

function applyStoredTheme() {
    let theme = "light";
    try { theme = window.__portfolioTheme || "light"; } catch (err) { /* no-op */ }
    if (theme === "dark") htmlEl.classList.add("theme-dark");
}
applyStoredTheme();

themeToggle.addEventListener("click", () => {
    const isDark = htmlEl.classList.toggle("theme-dark");
    window.__portfolioTheme = isDark ? "dark" : "light";
});


/* ==================================================================
   8. SCROLL WIDGETS — progress bar & back-to-top
   ================================================================== */
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

function updateScrollWidgets() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
    backToTop.classList.toggle("is-visible", scrollTop > 480);
}
updateScrollWidgets();
window.addEventListener("scroll", updateScrollWidgets, { passive: true });

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ==================================================================
   9. SCROLL REVEAL — fade/slide-up saat elemen [data-reveal] masuk viewport
   ================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

function observeReveal(el) {
    revealObserver.observe(el);
}

document.querySelectorAll("[data-reveal]").forEach(observeReveal);


/* ==================================================================
   10. SEARCH / FILTER MATA KULIAH
   ================================================================== */
const courseSearch = document.getElementById("courseSearch");
courseSearch.addEventListener("input", () => {
    const query = courseSearch.value.trim().toLowerCase();
    const filtered = courses.filter(c =>
        c.title.toLowerCase().includes(query) || c.shortDesc.toLowerCase().includes(query)
    );
    renderCourseCards(filtered);
});

// Pencarian Semester 2
const courseSearchSemester2 = document.getElementById("courseSearchSemester2");
courseSearchSemester2.addEventListener("input", () => {
    const query = courseSearchSemester2.value.trim().toLowerCase();
    const filtered = coursesSemester2.filter(c =>
        c.title.toLowerCase().includes(query) || c.shortDesc.toLowerCase().includes(query)
    );
    renderCourseCards(
        filtered,
        courseGridSemester2,
        courseGridEmptySemester2,
        coursesSemester2.length === 0
            ? "Mata kuliah Semester 2 belum ditambahkan."
            : "Tidak ada mata kuliah yang cocok dengan pencarianmu."
    );
});


/* ==================================================================
   11. FOOTER — identitas & tahun
   ------------------------------------------------------------------
   GANTI IDENTITAS DI SINI (nama, program studi, universitas)
   ================================================================== */
document.getElementById("footerName").textContent = "Ida Bagus Anom Mudita";
document.getElementById("footerProdi").textContent = "Informatika — Pendidikan Profesi Guru";
document.getElementById("footerUniv").textContent = "Universitas Pendidikan Ganesha";
document.getElementById("footerYear").textContent = new Date().getFullYear();


/* ==================================================================
   12. INIT — buka langsung modal mata kuliah jika ada #course-<id> di URL
   ================================================================== */
(function initFromHash() {
    const hash = window.location.hash;
    const match = hash.match(/^#course-([\w-]+)$/);
    if (match) {
        const course = findCourseById(match[1]);
        if (course) openCourseModal(course.id);
    }
})();
