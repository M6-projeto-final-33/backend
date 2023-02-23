# Motors shop API

#### Motors shop é um projeto criado com o intuito de anunciar carros e motos para compra ou leilão, Cadastre-se e veja os veículos disponíveis!


### Endpoints:
<b>URL base da API: https://motors-shop.herokuapp.com</b>

---

## 🔹 **Rotas de Anúncios**
### ▪️ Criação de um anúncio

> POST /announcements/ - FORMATO DA REQUISIÇÃO

```JSON
{
	"typeAd": "sale",
	"title": "Honda Civic",
	"year": "2019",
	"mileage": "10",
	"price": 100000,
	"description": "Honda Civic 2019 semi-usado para compra",
	"vehicleType": "car",
	"coverImg": "httm://honda.com/honda-civic-2019.jpg",
	"userId": "21708575-7417-4a7c-af0b-37da30394c7a"
}
```

Caso tudo dê certo, a resposta será assim:

> POST /announcements/ - FORMATO DA RESPOSTA - STATUS 201

```JSON
{
	"id": "8365725-9772-4a7c-af0b-85jg8s03pas7"
	"typeAd": "sale",
	"title": "Honda Civic",
	"year": "2019",
	"mileage": "10",
	"price": 100000,
	"description": "Honda Civic 2019 semi-usado para compra",
	"vehicleType": "car",
	"coverImg": "httm://honda.com/honda-civic-2019.jpg",
	"createdAt": "2023-02-22T21:59:45.839Z",
	"updatedAt": "2023-02-22T21:59:45.839Z",
	"userId": "21708575-7417-4a7c-af0b-37da30394c7a"
}
```

### ⚠️ Possíveis Erros

> POST /announcements/ - FORMATO DA RESPOSTA - STATUS 400

Caso você esqueça de enviar algum campo, a resposta de erro será assim:

```JSON
{
  "message": "Required field is missing"
}
```

> POST /announcements/ - FORMATO DA RESPOSTA - STATUS 400

Caso alguma chave do corpo da requisição esteja errada, a resposta de erro será assim:

```JSON
{
  "message": "Invalid Key"
}
```

### ▪️ Listar Anúncios

> GET /announcements/ - FORMATO DA REQUISIÇÃO

```JSON
No Body
```

Caso tudo dê certo, a resposta será assim:

> GET /announcements/ - FORMATO DA RESPOSTA - STATUS 200

```JSON
[
	{
		"id": "b3f3b174-7264-497d-9a3f-0e06a8724985",
		"typeAd": "sale",
		"title": "titulo",
		"year": "2019",
		"mileage": "10",
		"price": 100000,
		"description": "descricao",
		"vehicleType": "car",
		"coverImg": "url",
		"createdAt": "2023-02-22T21:59:45.839Z",
		"updatedAt": "2023-02-22T21:59:45.839Z",
		"userId": "21708575-7417-4a7c-af0b-37da30394c7a"
	},
	{
		"id": "13178514-073f-4c40-bc58-fa974c953c76",
		"typeAd": "sale",
		"title": "titulo",
		"year": "2018",
		"mileage": "10",
		"price": 500000,
		"description": "descricao",
		"vehicleType": "car",
		"coverImg": "url",
		"createdAt": "2023-02-23T19:57:36.966Z",
		"updatedAt": "2023-02-23T19:57:36.966Z",
		"userId": null
	}
]
```

### ▪️ Atualização de um anúncio

> PATCH /announcements/:announcementId - FORMATO DA REQUISIÇÃO

```JSON
{
	"typeAd": "sale",
	"title": "Honda Civic",
	"year": "2019",
	"mileage": "10",
	"price": 100000,
	"description": "Honda Civic 2019 semi-usado para compra",
	"vehicleType": "car",
	"coverImg": "httm://honda.com/honda-civic-2019.jpg",
	"userId": "21708575-7417-4a7c-af0b-37da30394c7a"
}
```

Caso tudo dê certo, a resposta será assim:

> PATCH /announcements/:announcementId - FORMATO DA RESPOSTA - STATUS 200

```JSON
{
	"id": "8365725-9772-4a7c-af0b-85jg8s03pas7"
	"typeAd": "sale",
	"title": "Honda Civic",
	"year": "2019",
	"mileage": "10",
	"price": 100000,
	"description": "Honda Civic 2019 semi-usado para compra",
	"vehicleType": "car",
	"coverImg": "httm://honda.com/honda-civic-2019.jpg",
	"createdAt": "2023-02-22T21:59:45.839Z",
	"updatedAt": "2023-03-15T10:35:02.758Z",
	"userId": "21708575-7417-4a7c-af0b-37da30394c7a"
}
```

### ⚠️ Possíveis Erros

> PATCH /announcements/:announcementId - FORMATO DA RESPOSTA - STATUS 400

Caso alguma chave do corpo da requisição esteja errada, a resposta de erro será assim:

```JSON
{
  "message": "Invalid Key"
}
```

> PATCH /announcements/:announcementId - FORMATO DA RESPOSTA - STATUS 401

Caso a API não encontre o anúncio, a resposta de erro será assim:

```JSON
{
  "message": "Announcement not found"
}
```

### ▪️ Deletar anúncio

> DELETE /announcements/:announcementId - FORMATO DA REQUISIÇÃO

```JSON
No Body
```

Caso tudo dê certo, a resposta será assim:

> DELETE /announcements/:announcementId - FORMATO DA RESPOSTA - STATUS 204

```JSON
No Body
```

### ⚠️ Possíveis Erros

> DELETE /announcements/:announcementId - FORMATO DA RESPOSTA - STATUS 401

Caso a API não encontre o anúncio, a resposta de erro será assim:

```JSON
{
  "message": "Announcement not found"
}
```
