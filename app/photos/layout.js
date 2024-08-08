import '../globals.css';

export default function RootLayout({ children, modal }) {
  return (
    <div className="layoutWrapper">
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  );
}
