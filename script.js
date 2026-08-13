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
            connection: `Materi perkuliahan pada topik 1 sampai topik 4 memiliki keterkaitan yang sangat erat dengan peran saya sebagai calon guru. Pada topik pertama, saya memahami pemikiran Ki Hadjar Dewantara tentang hakikat pendidikan, yaitu bahwa pendidikan bertujuan untuk menuntun segala kodrat yang dimiliki peserta didik agar mencapai keselamatan dan kebahagiaan setinggi-tingginya. Guru tidak bertugas membentuk peserta didik sesuai keinginannya, melainkan membimbing dan mendampingi perkembangan mereka sesuai kodrat alam dan kodrat zamannya. Selain itu, semboyan "Ing Ngarso Sung Tulodo, Ing Madya Mangun Karso, dan Tut Wuri Handayani" menjadi pedoman bagi saya dalam menjalankan peran sebagai pendidik.

Arti dari semboyan tersebut: Ing Ngarso Sung Tulodo berarti "di depan memberi teladan"; Ing Madya Mangun Karso berarti "di tengah membangun semangat"; Tut Wuri Handayani berarti "di belakang memberi dorongan".

Pada topik kedua, saya mempelajari growth mindset yang sejalan dengan pemikiran Ki Hadjar Dewantara — bahwa setiap peserta didik memiliki potensi yang dapat terus berkembang melalui proses belajar, latihan, dan pengalaman. Guru berperan sebagai pamong yang menuntun peserta didik mengembangkan potensinya.

Pada topik ketiga, saya memahami bahwa pendidikan nilai sangat penting sebagai landasan pembentukan karakter, berpedoman pada Pancasila dan UU Sistem Pendidikan Nasional, di tengah fenomena pergeseran nilai, pengaruh media sosial, dan bullying.

Pada topik keempat, saya mempelajari pentingnya kode etik profesi guru sebagai pedoman bertindak profesional dan bertanggung jawab.`,

            challenge: `Tantangan yang saya alami berdasarkan pengalaman praktik mengajar sebelumnya adalah anggapan bahwa tugas guru hanya sebatas menyampaikan ilmu dan pembelajaran berpusat pada guru. Namun, setelah mempelajari materi ini, saya memahami bahwa pendidikan tidak hanya berfokus pada penyampaian pengetahuan, melainkan guru berperan untuk menuntun dan membimbing peserta didik melalui sistem among yang tercermin dalam semboyan Ing Madya Mangun Karso dan Tut Wuri Handayani. Pembelajaran bertujuan untuk memerdekakan peserta didik agar dapat berkembang sesuai potensinya.`,

            concept: `1. Pendidikan berpusat pada peserta didik — guru sebagai pamong yang menuntun dan membimbing.
2. Kodrat alam dan kodrat zaman — pendidikan harus relevan dengan lingkungan dan perkembangan zaman.
3. Cipta, rasa, karsa, dan karya — pendidikan membentuk intelektual, karakter, kreativitas, dan keterampilan secara utuh.
4. Memahami kode etik profesi guru — bertindak profesional dan mengutamakan kepentingan peserta didik.`,

            change: `1. Mengubah pola pikir bahwa guru bukan hanya penyampai materi, tetapi juga pembimbing dan penuntun.
2. Merancang pembelajaran yang lebih berpusat pada peserta didik.
3. Menerapkan prinsip Ing Ngarso Sung Tulodo, Ing Madya Mangun Karso, dan Tut Wuri Handayani.
4. Menyesuaikan pembelajaran dengan kodrat alam dan kodrat zaman.
5. Menumbuhkan growth mindset pada peserta didik.
6. Menanamkan nilai moral, karakter, dan nilai-nilai Pancasila.
7. Menciptakan suasana belajar yang memerdekakan dan mendorong berpikir kritis.
8. Memahami dan menerapkan kode etik profesi guru.
9. Terus belajar dan mengembangkan kompetensi sebagai calon guru profesional.`
        },

        artifacts: [
            {
                name: "Tugas Topik 3A — Filosofi Pendidikan dan Pendidikan Nilai",
                type: "link",
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya di data `artifacts` (properti `url`) pada script.js.",
                preview: false
            }
        ],
        artifactWhy: `Artefak tersebut saya pilih karena topik pendidikan moral dan karakter sangat relevan dengan kondisi pendidikan saat ini. Pada topik 1 dan 2, saya telah mempelajari filosofi pendidikan Ki Hadjar Dewantara, seperti konsep kodrat alam, kodrat zaman, dan growth mindset, yang menekankan bahwa guru harus menuntun peserta didik agar berkembang sesuai dengan potensi dan zamannya. Namun, pada kenyataannya masih banyak permasalahan moral yang terjadi di lingkungan pendidikan, terutama di era modern dan digital.

Perkembangan teknologi dan media sosial ibarat pisau bermata dua: memberi manfaat, tetapi juga membawa dampak negatif seperti menurunnya sopan santun, empati, tanggung jawab, serta kasus perundungan dan penyimpangan perilaku peserta didik.

Selain itu, saya melihat adanya ketidakkonsistenan penanaman nilai moral antara sekolah, keluarga, dan masyarakat sehingga peserta didik mengalami kebingungan membedakan perilaku yang benar dan salah. Oleh karena itu, artefak ini memberikan gambaran nyata bahwa pendidikan tidak cukup hanya berfokus pada akademik, tetapi juga harus memperhatikan pendidikan moral dan karakter.`,
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
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
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
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
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
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
            },
            {
                name: "Refleksi & Analisis Artefak Pembelajaran — Growth Mindset.pptx",
                type: "pptx",
                url: "assets/documents/refleksi-growth-mindset.pptx",
                description: "Slide presentasi ringkasan refleksi 4C dan analisis artefak untuk mata kuliah ini (11 slide).",
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
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
                preview: false
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
                url: "",
                description: "Bukti dukung hasil refleksi pengalaman belajar. GANTI dengan tautan tugas yang sebenarnya.",
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
const coursesSemester2 = [];


/* ==================================================================
   3. RENDER CARDS — kartu mata kuliah di grid Semester 1
   ================================================================== */
const courseGrid = document.getElementById("courseGrid");
const courseGridEmpty = document.getElementById("courseGridEmpty");

function renderCourseCards(list) {
    courseGrid.innerHTML = "";

    if (list.length === 0) {
        courseGridEmpty.hidden = false;
        return;
    }
    courseGridEmpty.hidden = true;

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
        courseGrid.appendChild(card);
        // trigger reveal animation for dynamically-added cards
        requestAnimationFrame(() => {
            observeReveal(card);
        });
    });
}

renderCourseCards(courses);


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
const sections = ["semester1", "semester2"].map(id => document.getElementById(id)).filter(Boolean);

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
    const match = hash.match(/^#course-(\d+)$/);
    if (match) {
        const course = findCourseById(match[1]);
        if (course) openCourseModal(course.id);
    }
})();
