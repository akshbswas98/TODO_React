import "./styles.css"


export default function App() {
  return <form className="new-item-form" action="">
      <div className="form-row">
      <label htmlFor="">New Item</label>
      <input type="text" id="item" />
      </div>
  </form>
}