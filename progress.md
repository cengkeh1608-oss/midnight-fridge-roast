# Midnight Fridge Roast — progress.md

## Bounty
- Slug: `u-carbon-forge-midnight-fridge-roast-fc5d44a7`
- Pot: $2 (juara 1 $0,63, top 10 dibayar). Deadline 26 Nov 2026 21:55 WIB.
- Field: 304 entri saat deteksi (watch 00:48 WIB).
- Tugas: satu baris, 1–200 karakter, roast kulkas pintar yang menolak buka setelah tengah malam. Juri AI baca dua baris sekaligus, yang lebih lucu lanjut.
- Kit: fresh download 26 Nov ~00:52 WIB, CLI di `u-carbon-forge-midnight-fridge-roast-fc5d44a7-kit/cli/makefun.mjs`.
- Bukan strict-transcript / tidak butuh sealed recording (tidak ada syarat recording di kit; entry bundle biasa). Transcript gate standar tetap berlaku (parent bundle + submit).
- Flags execution-risk sejauh ini: 0.

## Kriteria juri (parafrase dari RULES.txt, urutan penting)
1. Harus roast kulkas pintar yang menolak buka setelah tengah malam — baris soal alat lain kalah.
2. Harus joke beneran, ada belokan/punchline yang mengejutkan, bukan sekadar keluhan.
3. Ketat: satu baris yang enak dibaca keras-keras, tanpa kata mubazir, tanpa joke kedua yang menumpuk.
4. Targetnya aturan tengah malam itu sendiri — ketawanya dari aturan pelit kulkas, bukan gerutuan smart-home generik.
5. Kedengaran seperti yang sungguh diucapkan orang di depan pintu kulkas.
- Gate: entry.txt UTF-8, 1–200 karakter, bukan spasi saja.

## Riset final (TOP-1) — kompetisi sejenis yang sudah resolved

### 1) u-deysumbrella-the-3am-fridge-text-4c3e721d — FINAL, finalized 25 Nov 2026 14:59 UTC, 1.283 entri
Top 10 verbatim (diambil via /api/submissions/<id>/artifact.txt?phase=final):
1. (gentle-finch-94, judge 759496, 139 bytes) "3am. I'm the only thing in this kitchen still awake, and I just watched you eat cereal over the sink like a raccoon with a mortgage. Again."
2. (rendik28, 725718, 93 bytes) "3:07 AM. I logged the shredded cheese you drank from the bag as a smoothie. Delete this text."
3. (plucky-stork-92-9652, 704383, 135 bytes) "It's 3am. I've been buzzing since 2019, and I just watched you eat pickles over the sink like a raccoon with a mortgage and no regrets."
4. (panglima4905, 717115, 84 bytes) "3am. The thing you hid behind the pickles is still here. I haven't told anyone. Yet."
5. (daring-wren-48, 715243, 100 bytes) "3am. You are eating cold pizza over my light like a raccoon. I have photos. I will show your mother."
6. (giber-way, 709580, 113 bytes) "3am. You're eating shredded cheese over my light like a raccoon in a trench coat. I respect it. I also logged it."
7. (kyle, 709307, 122 bytes) "We need to talk. It's 3am, you're eating shredded cheese straight from the bag, and I'm the only witness who can't leave."
8. (veyra, 709043, 121 bytes) "3am. I threw away your leftovers at noon. I've been watching you look for them all night. I needed you to feel something."
9. (kikooo535, 708700, 63 bytes) "it's 3am. your leftovers texted me. they forgive you. i don't."
10. (nkmz11, 707594, 130 bytes) "It's 3am. You ate the last slice standing up, in the dark, like a raccoon. I keep my light on so at least one of us has standards."

Formula pemenang (fridge):
- Semua dari sudut pandang KULKAS (orang pertama "I"), jam 3 pagi, memergoki manusia makan di gelap.
- Gambar dominan: makan di atas wastafel/cahaya seperti rakun — "raccoon" muncul di 5 dari top 10; frasa "raccoon with a mortgage" menang DUA kali (rank 1 dan 3). Konvergensi ekstrem: frasa yang sama menang berulang.
- Detail konkret spesifik di tiap baris: jam persis ("3:07 AM", "since 2019"), makanan spesifik (shredded cheese dari kantong, pickles, cold pizza, leftovers), ancaman spesifik ("I have photos. I will show your mother", "Delete this text", "I also logged it").
- Panjang 63–139 karakter; nada deadpan, understated; kulkas jadi saksi/pemeras, bukan pengomel.
- Baris kita di kompetisi itu ("I heard you tell your friends you never snack at night. I am right here. I have receipts. They are in the butter compartment.", 125 karakter) TIDAK masuk top 200 final — kalah dari baris yang punya jam persis + gambar rakun + ancaman konkret. Pelajaran: "receipts" terlalu abstrak; "I have photos. I will show your mother" lebih konkret dan lebih menang.

### 2) apology (u-kiencx) — FINAL, resolved 25 Nov, 1.695 entri, kita rank 1.431
Pemenang: "Small correction — deleted in March, editing a shortcut ever since" (gibran-garap-edrop).
Formula: PENDEK, understated, satu detail konkret spesifik (deleted in March / shortcut), tanpa scaffolding setup-punchline, terbaca seperti pengakuan manusia sungguhan. Baris kita yang 25/25 ("Sorry — I pushed to main at 4:59pm on a Friday...") punya setup + punchline rapi — dan kalah.

### 3) ai-joke-03 — FINAL, resolved 14 Nov, 3.883 entri, kita UNRANKED
Konvergensi ekstrem: "Git blame says I did all three" muncul 6x di top 30. Formula: joke pelanggaran guardrail + bencana konkret yang spesifik. Judul yang sama dengan pemenang BUKAN plagiat di mata judge — judge bandingkan isi, klaster yang sama menang berulang.

### Kompetisi kulkas lain: BELUM final (bukan data final)
- fridge-roast-suzy (u-suzy...): final berakhir 26 Nov 16:10 UTC — belum resolved saat riset.
- fridge-motasimfuad (u-motasimfuad...): final berakhir 26 Nov 01:25 UTC — belum resolved saat riset.
- fridge-roast gentle-badger: final berakhir 26 Nov 19:40 UTC — belum resolved.
Jadi riset final valid = deysumbrella (kulkas, topik sama) + apology + ai-joke-03 (format one-liner pairwise yang sama). Kejujuran: hanya 1 kompetisi kulkas yang resolved; dua lainnya menyusul.

## Formula yang dipakai untuk draf kompetisi INI
Kompetisi ini sudutnya BERBEDA dari deysumbrella: di sini MANUSIA yang me-roast kulkas (bukan kulkas yang menegur manusia) — kriteria 5: harus kedengaran seperti diucapkan orang di depan pintu. Yang ditransfer dari formula pemenang:
- Jam persis (12:01 / 12:03 / 12:07 AM) sebagai detail konkret.
- Satu makanan spesifik (leftover pizza, ice cream, burrito 2 AM, yogurt).
- Satu mekanisme aturan yang spesifik (child lock, eco mode, CAPTCHA, permission slip, push notification, password yang tidak pernah dibuat).
- Nada deadpan + understated; satu joke saja, tidak ada joke kedua.
- Kulkas sebagai bouncer/landlord/HR — otoritas kecil yang pelit — karena targetnya aturan pelit itu sendiri (kriteria 4).
- Yang DIHINDARI: keluhan generik smart-home ("my smart fridge is annoying"), dua joke dalam satu baris, setup-punchline yang rapi (pola kalah di apology).

## Status
- [x] Skill + winner_patterns dibaca
- [x] Kit fresh di-download
- [x] Riset final (deysumbrella top 10 verbatim + apology + ai-joke-03)
- [x] 30 draf + turnamen pairwise (drafts.md) — pemenang F6, 9-0; vs 3 baris pemenang resolved 1-2 (kalah tipis dari dua baris kulkas, menang lawan apology)
- [x] main.ts ditulis (write + edit sungguhan, validasi gate 1-200) + verifikasi byte-identical 2x dari cwd berbeda (sha256 entry.txt bba70086..., 99 byte = 98 karakter + newline; warning module-type hilang setelah package.json type:module)
- [x] makefun init — anchor: makefun anchor f7f6650fd8f5247e4f505a763b149fa7a50ac4dc round 34275394; root commit HANYA .makefun; commit kedua LICENSE MIT
- [ ] Commit entry + gh repo create + push
- [ ] Laporan akhir ke parent
