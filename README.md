###By Frederico Bezerra :smile:
#[:fa-linkedin:](https://www.linkedin.com/in/fredericobezerra ) [:fa-github:](https://github.com/freddneos)


#Simple Ionic PWA
###  :tw-1f1fa-1f1f8:  Description

In this project I shared the code of my mobile application made in ionic to generate a PWA that monitors the integration between the WMAS-Store system and Totvs Protheus ERP.

In this repository you will find only the frontend Ionic 3 application code.
Soon I will upload the backend done in[ AdvPl (Clipper)](https://en.wikipedia.org/wiki/AdvPL " AdvPl (Clipper)") programming language used by Totvs Protheus ERP.

###Json Structure(provided data)

```json
[{
    "pedidos": [
        {
            "filial_entrega": "PEDRAO",
			 "hora_integracao_wmas": "09:45:43",
            "quantidade_retaguarda": "2",
            "quantidade_wmas": "2",
            "pedido": "029843",
            "status_wmas": "PREVISTO",
            "hora_integracao_retaguarda": "09:45:36",
            "nota_fiscal": ""
            "itens": [
                {
                    "item_retaguarda": "01",
                    "item_wms": 1,
                    "pedido": "029843",
                    "produto": "007162",
                    "quantidade_picking": 0,
                    "quantidade_separada": 0,
                    "descricao": "CHOCOLATE BRANCO SICAO 1,01KG",
                    "quantidade_pedido": 3
                }
            ]
        }]
```
##Dashboard preview (image)

![](http://www.neosdev.com.br/img/portifolio/cpwms/webappCasaspedro_wms.png "Dashboard - PWA")

##Mobile preview (image)
![](http://www.neosdev.com.br/img/portifolio/cpwms/appCasaspedro_wms.png "Dashboard - PWA")



##Very usefull Tip :tw-1f60e:
####Follow these steps to transform you Ionic app in a PWA

go into src/index.html and find the below commented out script that enables the service worker and uncomment it:
```json
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('service worker installed'))
      .catch(err => console.log('Error', err));
  }
</script>
```
Now you mobile app is ready to be deployed like a PWA :tw-1f44f:   :tw-1f44f:

### Thank you and 
if you want to more about me contact me on linkedin and follow my repos!

