<h1 align="center">
  Waiter App
</h1>
<p align="center">
  <img src="./.screens/logo.svg" alt="Waiter App" title="Waiter App"/>
</p>

# 💻 Project

<p>
Waiter App: é um App ajudar seu cliente a fazer seu pedido através do nosso app
</p>

## ✨ Technologies used

- [Node](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [SocketIO](https://socket.io)

# 🚀 How to run

## Install dependencies

yarn install

## Run docker with image from mongodb

## Run the app

yarn dev

### Request

<p>Category</p>
<span>Create category</span>

```bash
POST /categories
```

<span>Datas</span>

```bash
{
	"name": "Promoções",
	"icon": "🎫"
}
```

<span>List categories</span>

```bash
GET /categories
```

<span>List products by category</span>

```bash
GET /categories/:categoryId/products
```

<p>Products</p>
<span>Create product</span>

```bash
POST /products
```

<span>Datas</span>

```bash
{
	"name": "Pizza Marguerita",
	"description": "Uma pizza perfeita de marguerita",
  "image": "image_path",
  "price": 45,
  "category": "categoryId",
  "ingredients": "[
    {"name": "Mussarela", "icon": "🧀" },
    {"name": "Manjericão", "icon": "🌿" },
    { "name":  "Tomate", "icon": "🍅"}
  ]" or "[]"
}
```

<span>List products</span>

```bash
GET /products
```

<p>Orders</p>
<span>Create order</span>

```bash
POST /orders
```

<span>Datas</span>

```bash
{
	"table": "3",
	"products": [
		{
			"product": "6385abb869fe83b4e1feb8c2",
			"quantity": 2
		}
	]
}
```

<span>List orders</span>

```bash
GET /orders
```

<span>Update order</span>

```bash
PATCH /orders/:orderID
```

<span>Datas</span>

```bash
{
	"status": "IN_PRODUCTION"
}
```

<span>Delete order</span>

```bash
DELETE /orders/:orderID
```

## 📄 Licença

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for
more details
