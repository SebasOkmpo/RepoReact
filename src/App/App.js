const App = () => (
    <div>
      <header>
        <Menu />
        <Text />
        <ProductSection />
        <ProductLayout
          title="Donas de Chocolate"
          description="Exquisitas donas de caramelo, chocolate y chispas"
          imageSrc="../public/Producto1.jpg"
          layoutClass="layout-left"
        />
        <ProductLayout
          title="Cupcakes"
          description="Deliciosos pastelillos sabor a vainilla, chocolate y arequipe."
          imageSrc="../public/Producto2.jpg"
          layoutClass="layout-right"
        />
        <ProductLayout
          title="Galleta con Fresa y Uvas"
          description="Galletilla preparada con masa de la casa y frutas frescas"
          imageSrc="../public/Producto3.jpg"
          layoutClass="layout-left"
        />
        <Button />
        <Testimony />
        <Footer />
      </header>
      <main></main>
    </div>
  );
  
  export default App;