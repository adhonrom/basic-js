Misal kita bikin file html sederhana sebagai berikut
```html
<div class="kartu">
  <p class="tittle"> Contoh Misalnya <p>
  <p>FrontEnd Dev</p>
</div>

<div class="kartu">
  <p class="tittle"> Contoh Lainnya <p>
  <p>Product Manager</p>
</div>

<div class="kartu">
  <p class="tittle"> Contoh Lagi <p>
  <p>Back End</p>
</div>
```
kemudian untuk css nya sebagai berikut
```css
.kartu {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  width: 150px;
  box-shadow: 0px 2px 2px #ccc;
  display: inline-block;
  margin-right: 10px;
}
.tittle {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
}
p {
  margin: 0px;
}
```
Bayangkan jika ada 100 nama / card maka kita akan menulis satu persatu. maka hal itu sangat tidak efektif. maka kita gunakan librari react dimana kita bisa membuat lebih simple karena masing-masing terpecah menjadi komponen. 

secara sederahan kita bisa menyimpulkan react adalah sebuah tool / librari yang disediakan untuk memahami apa itu komponen (untuk membaca pembuatan sebuah komponen). kemudian ada react-DOM yang merupakan librari yang yang disediakan untuk merender komponen tadi yang dibuat dari react ke DOM nya.


komponen itu biasanya berupa function, maka kita bikin function sederhana sebagai berikut


dan bisa kita ganti semua kode di atas dengan react berikut:
di html cukup ditulis 
```html
<div id="root"></div>
```
di JS sebagai berikut 
```javascript
const Card = (props) => {
  return(
  <div class="kartu">
    <p class="tittle"> {props.name} </p>
    <p>{props.job}</p>
  </div>
  )
}

const App = () => {
  return (
    <div>
       <Card name="Contoh Misalnya" job="Project Manajer"  />
       <Card name="Contoh Lagi" job="FrontEnd"/>
       <Card name="Contoh Terakhir" job="UI/UX"/>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
```



