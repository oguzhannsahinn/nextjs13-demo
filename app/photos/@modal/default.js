// buradaki default page .../photos sayfasına gittiğimizde @modal slotunun URL'de karşılığı olmadığından devreye girer ve render olur.
// default.js olmadığı durumda ise not-found devreye girer çünkü slot kullanımından dolayı aynı segmentte olan bir page'in karşılığını bulamaz

export default function Default() {
  return <div>(default page of modal slot)</div>;
}