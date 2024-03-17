# React + Vite

to create new react project , type in terminal

```bash
npm create vite@latest
```

then it will ask you for project name enter as your wish

### Fetch Data on Client

we can fetch data from server on client with the help of `fetch` , it will provided by javascript to us , but a more simpler way is use third party library `axios`

code to fetch a data using axios

Install axios

```bash
npm install axios
```

Make a request a endpoint to fetch data

```js
const response = await axios.get("/students");
```
