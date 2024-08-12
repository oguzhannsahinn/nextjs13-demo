// @reports altında settings sayfası olmadığı için hard navigation esnasında default.js devreye girer.
// default.js kullanılmama durumunda sayfa not found olarak gelecektir.

export default async function ReportsDefaultPage() {
  return <div>Reports default page</div>;
}
