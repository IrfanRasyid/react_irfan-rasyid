# Version Control and Branch Management (Git)

1. Versioning
   Yaitu mengatur versi dari suatu file, sehingga kita bisa mengembalikan ke versi sebelumnya jika terjadi kesalahan.

2. Version control system (VCS)
   Yaitu sistem yang mengatur versi dari suatu file, dan menyimpan perubahannya.
   Single user VCS: hanya bisa digunakan oleh satu user.
   Centralized VCS: bisa digunakan oleh banyak user, tapi hanya ada satu server.
   Distributed VCS: bisa digunakan oleh banyak user, dan bisa ada banyak server.

3. Git
   Git merupakan salah satu VCS yang termasuk dalam kategori distributed VCS.
    Git memiliki 3 area:
    - Working directory: area dimana kita melakukan perubahan pada file.
    - Staging area: area dimana kita menyiapkan perubahan untuk dikirim ke repository.
    - Repository: area dimana kita menyimpan perubahan yang sudah dikirim dari staging area.

4. Repository
    Repository terdiri dari 2 jenis:
    - Remote repository: repository yang berada di server.
    - Local repository: repository yang berada di komputer kita.

5. Branch
   Cabang dari repository.
   Branch biasanya terdiri dari:
    - Master branch: branch utama dari repository.
    - Remote branch: branch yang berada di remote repository.
    - Local branch: branch yang berada di local repository.

6. Branch management
   Branch management adalah cara mengatur branch.
    - HEAD: pointer yang menunjuk ke branch yang sedang aktif.
    - Commit: menyimpan perubahan pada repository.
    - Checkout: berpindah ke branch lain.
    - Merge: menggabungkan branch lain ke branch aktif.

7. Git command
    Git memiliki banyak command, diantaranya:
    - Pull: mengambil perubahan dari remote repository.
    - Push: mengirim perubahan ke remote repository.
    - Pull request: permintaan untuk menggabungkan perubahan pada repository orang lain ke repository kita.
    - Merge conflict: konflik yang terjadi saat menggabungkan perubahan dari branch lain ke branch aktif.
