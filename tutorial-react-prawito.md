Misal kita bikin file html sederhana sebagai berikut
```html
<div class="kartu">
  <p class="tittle"> Contoh Misalnya </p>
  <p>FrontEnd Dev</p>
</div>

<div class="kartu">
  <p class="tittle"> Contoh Lainnya </p>
  <p>Product Manager</p>
</div>

<div class="kartu">
  <p class="tittle"> Contoh Lagi </p>
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
```javascript
function Card(){
 return(
  <div class="kartu">
    <p class="tittle"> Contoh Misalnya </p>
    <p>FrontEnd</p>
  </div>
  )
}
ReactDOM.render(<Card />, document.querySelector('#root'))
```

Nah agar kita bisa membuat komponen tersebut berulang, maka kita buat function tersebut menjadi format es6 dgn mengganti function-nya menjadi App komponen. 
di html kita cukup tulis:
```html
<div id="root"></div>
```

```javascript
const Card = () => {
 return(
  <div class="kartu">
    <p class="tittle"> Contoh Misalnya </p>
    <p>FrontEnd</p>
  </div>
  )
}

const App = () => {
  return (
  <div>
      <Card />
      <Card />
      <Card />
  </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
```

dan  agar lebih dinamis, maka kita bisa mengubah kode di atas dengan menggunakan props 
di html itulis 

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


[Sumber](https://www.youtube.com/watch?v=EbdwcqZAkN0&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=2)
