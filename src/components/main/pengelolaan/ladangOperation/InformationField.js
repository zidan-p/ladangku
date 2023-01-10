




export default function InformationField() {
  return (
    <div className="flex flex-col h-5/6 justify-between p-5">
      <div className>
        <h5 className="text-sm">Nama ladang yang ingin dibuat</h5>
        <p className="text-xs text-gray-500">
          Biasanya seorang petani bisa memiliki lebih dari 1 ladang tanaman.
          kami menekankan supaya dalam setiap satu ladang hanya ada 1 jenis tanaman.
          hal tersebut supaya mempermudah pengelolaan tanaman.
        </p>
      </div>
      <div className>
        <h5 className="text-sm">Tanaman</h5>
        <p className="text-xs text-gray-500">
          hasil tani yang nantinya akan dipanen. karena ini adalah applikasi
          yang masih tahap pengembangan maka opsi tanaman terbatas hanya yang
          tersedia.
        </p>
      </div>
      <div className>
        <h5 className="text-sm">Luas seluruh ladang yang akan ditanami </h5>
        <p className="text-xs text-gray-500">
          hasil tani yang nantinya akan dipanen. karena ini adalah applikasi
          yang masih tahap pengembangan maka opsi tanaman terbatas hanya yang
          tersedia.
        </p>
      </div>
      <div className>
        <h5 className="text-sm">Banyak bibit yang telah / akan ditanam</h5>
        <p className="text-xs text-gray-500">
          Banyaknya bibit nantinya akan menjadi patokan banyaknya tanaman yang
          tumbuh
        </p>
      </div>
    </div>
  );
}
