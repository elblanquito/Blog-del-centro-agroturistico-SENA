> [!NOTE]  
> ## Plantilla de Blogger Modificada  
> ¡Hola! Esta es una modificación de una plantilla de Blogger, puedes encontrar la versión original aquí:
> - entrar a [Blogger](https://www.blogger.com/) entrar a un blog y luego `/tema/pinture windows/shade`  
>  
> No tenía experiencia previa con código "XML". modifique la mayoría
> de los elementos para hacerlos más fáciles de entender y simplificar
> el código en general.
> - [conceptos basicos](https://blog.templatetoaster.com/create-blogger-template-tutorial-guide/)
> - [documentacion oficial de blogger](https://bloggercode-blogconnexion.blogspot.com/2018/02/attributes-intro.html)

> [!TIP]  
> ## ¿Dónde trabajar?  
> Recomiendo usar Visual Studio Code para modificar este código 
> A continuación, algunas extensiones y configuraciones recomendadas:  
>  
> ### Extensiones:  
> - **XML Format** (lo más importante XD)  
> - **Colorful Comments** (para visualizar mejor los comentarios)  
> - **Highlight String** (para facilitar la lectura de código `CSS/JS`)  
>  
> ### Configuraciones:  
> - **Auto renombrar etiquetas:**  
>   Ve a `File > Preferences > Settings` o presiona (Ctrl + ,),  
>   luego busca **Linked Editing** en la barra de búsqueda y actívalo  
> - **Auto guardado:**  
>   Ve a `File > Auto Save`  

> [!TIP]  
> ## ¿Cómo subir las modificaciones?  
> Esta es la forma más rápida que encontré para subir cambios a Blogger:  
> 1. Ve a "Temas"  
> 2. Despliega las opciones de "Personalizar"  
> 3. Haz clic en "Restablecer"  
> 4. Carga el archivo que estás editando
> 5. Al actualizar tu blog, los cambios estarán aplicados 

> [!IMPORTANT]  
> ## Recordar:  
> - Ten cuidado con los comentarios que agregas, más de una vez  
>   han causado que los scripts dejen de funcionar ☠️  
> - Sube cambios constantemente o podrías perder algo importante,  
>   lo que te hará usar mucho `Ctrl + Z` 
> - Si borras algo por error, busca el tema original y descarga su código.  
>   Aunque a este punto, el código ya es muy diferente al original
>  
> ## ¿Qué es `<![CDATA[]]>`?  
> Es importante aunque esté comentado, ya que evita que XML interprete
> símbolos como `&` o `<>` esta comentado Para que el navegador
> no genere errores al leer el código.  
>
> aqui es util la extensión `Highlight String` para no ver mejor el codigo 
>  
> ```xml
> <script>  
>   //<![CDATA[ 👈 Ignorar símbolos como "&" "<>" ¡Importante!  
>   //js 👈 Comando decorativo "Highlight String Code"  
>  
>   //!js  
>   //]]>  
> </script>
> ``` 
> ```xml 
> <style>  
>   /*<![CDATA[ 👈 Ignorar símbolos como "&" "<>" ¡Importante! */  
>   /*css 👈 Comando decorativo "Highlight String Code" */  
>     
>   /*!css*/  
>   /*]]>*/  
> </style>  
> ```

> [!TIP]
> por ultimo si estas usando visual studio presiona
> `Ctrl + Shift + f` y busca "marker" para ver las
> partes principales del documento 😊
