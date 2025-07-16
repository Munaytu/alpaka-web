# **Tokenomics Detallados: El Token Meme Alpaka ($ALPAKA) \- Curva de Bonos**

**Tagline:** Tejiendo la Seguridad y el Crecimiento del Ecosistema Alpaka a través de la Curva de Bonos.

## **1\. Introducción a los Tokenomics de $ALPAKA**

La economía del token $ALPAKA se basa en un modelo innovador de **curva de bonos (bonding curve)**, que reemplaza la emisión fija y la distribución tradicional. Este modelo asegura liquidez continua, un descubrimiento de precios orgánico y un mecanismo de financiación autónomo para el ecosistema. Nuestro enfoque busca alinear los incentivos de todos los participantes del ecosistema, desde los tenedores de tokens hasta el equipo de desarrollo y la comunidad en general, a través de un sistema transparente y dinámico.

## **2\. Parámetros Fundamentales del Token y Contrato**

* **Nombre del Token:** Alpaka Token  
* **Símbolo:** $ALPAKA  
* **Blockchain:** BNB Smart Chain (BSC)  
  * **Estándar:** BEP-20  
  * **Ventajas de BSC:** Bajas comisiones de transacción, alta velocidad, gran ecosistema de DApps y exchanges descentralizados (DEXs) como PancakeSwap.  
* **Suministro Total:** Dinámico (no hay un suministro máximo predefinido; los tokens se acuñan y queman según la demanda del mercado).  
* **Contrato Inteligente:** Un contrato BondingToken que implementa la lógica de la curva de bonos.  
  * **INITIAL\_PRICE:** 0.001 BNB (o su equivalente en wei) – El precio de partida de un token ALPAKA cuando no hay tokens en circulación.  
  * **PRICE\_INCREMENT:** 0.00001 BNB (o su equivalente en wei) – El aumento de precio por cada token ALPAKA adicional acuñado (vendido por el contrato) a través de la curva.  
  * **tokensSold:** Una variable pública en el contrato que rastrea la cantidad total de tokens ALPAKA que han sido acuñados y están actualmente en circulación fuera del contrato de bonos.

## **3\. Mecanismo de la Curva de Bonos y Acumulación de Valor**

El contrato inteligente de $ALPAKA actúa como un Automated Market Maker (AMM) primario. Los usuarios interactúan directamente con el contrato para comprar o vender $ALPAKA, y el contrato gestiona la emisión/quema de tokens y el ajuste de precios.

### **A. Función de Compra (buy())**

* **Proceso:**  
  1. Un usuario envía BNB al contrato BondingToken (función buy() marcada como payable).  
  2. El contrato calcula el precio actual de ALPAKA utilizando la fórmula de la curva de bonos: precio\_actual \= INITIAL\_PRICE \+ (tokensSold \* PRICE\_INCREMENT).  
  3. Se determina la cantidad de ALPAKA a acuñar dividiendo el BNB enviado por el precio\_actual.  
  4. El contrato acuña (mints) la cantidad calculada de ALPAKA y la transfiere al usuario.  
  5. La variable tokensSold se incrementa con la cantidad de tokens acuñados.  
* **Impacto:**  
  * **Aumento de Precio:** Cada compra aumenta la cantidad de tokensSold, lo que a su vez incrementa el precio\_actual para las futuras compras, incentivando la adopción temprana.  
  * **Acumulación de Valor:** Los BNB enviados por los compradores se acumulan en el balance del contrato BondingToken, formando la reserva de valor que respalda los tokens y sirve como fuente de financiación para el proyecto.

### **B. Función de Venta (sell(uint256 amount))**

* **Proceso:**  
  1. Un usuario envía una cantidad específica de tokens ALPAKA de vuelta al contrato BondingToken.  
  2. El contrato calcula el reembolso en BNB al precio\_actual (o un precio ligeramente inferior para generar un spread que beneficie la tesorería, si se implementa un calculateRefund con un factor de descuento).  
  3. Los tokens ALPAKA recibidos se queman (burned), reduciendo la oferta circulante.  
  4. La variable tokensSold se decrementa con la cantidad de tokens quemados.  
  5. Los BNB correspondientes se transfieren de vuelta al usuario desde la reserva del contrato.  
* **Impacto:**  
  * **Disminución de Precio:** Cada venta disminuye la cantidad de tokensSold, lo que a su vez reduce el precio\_actual para las futuras transacciones, reflejando la menor demanda.  
  * **Liquidez Continua:** El contrato garantiza que siempre habrá BNB disponibles para los vendedores, siempre y cuando haya suficientes fondos en la reserva.

### **C. Modelo de Financiación del Ecosistema (withdrawBNB())**

El financiamiento para el desarrollo del Alpaka Hub, las campañas de marketing, los programas de recompensas (incluyendo influencers y embajadores) y las operaciones del equipo provienen directamente de los BNB acumulados en el contrato de la curva de bonos.

* **Mecanismo:** La función withdrawBNB() (solo accesible por el owner del contrato) permite retirar los BNB acumulados en el balance del contrato BondingToken.  
* **Propósito:** Este mecanismo reemplaza los impuestos por transacción tradicionales y las asignaciones fijas de suministro. Permite una gestión flexible de los fondos para el crecimiento del ecosistema, adaptándose a las necesidades del proyecto. Los fondos retirados se asignarán a:  
  * **Desarrollo del Alpaka Hub:** Financiamiento de nuevas funcionalidades, mantenimiento y actualizaciones tecnológicas.  
  * **Marketing y Adopción:** Campañas de marketing, alianzas estratégicas, listados en plataformas de seguimiento (CoinGecko, CoinMarketCap) y promoción general.  
  * **Sistema de Recompensas Comunitarias:** Provisión de fondos para recompensar la participación activa de los usuarios, la creación de contenido educativo y el soporte a la comunidad.  
  * **Programa de Influencers y Embajadores:** Asignación de recursos para colaboraciones con creadores de contenido y el reconocimiento de embajadores clave en Bolivia.  
  * **Operaciones del Equipo:** Cubrir los costos operativos y la compensación del equipo central.  
* **Transparencia:** Todas las transacciones en el contrato de la curva de bonos, incluyendo las compras, ventas y retiros de BNB, son públicas y auditables en la BNB Smart Chain.

## **4\. Transición a la Gobernanza Descentralizada (DAO)**

Aunque inicialmente el contrato BondingToken tendrá un owner (el equipo de Alpaka) para gestionar los retiros de BNB, la hoja de ruta contempla una transición completa a una estructura de gobernanza descentralizada (DAO).

* **Mecanismo Futuro:** El control de la función withdrawBNB() y otros parámetros clave del contrato (si se añaden) se transferirá a un contrato de gobernanza controlado por los tenedores de $ALPAKA.  
* **Propósito:** Esto permitirá a la comunidad votar sobre cómo se utilizan los fondos acumulados en la curva de bonos, qué programas se financian y qué direcciones estratégicas toma el proyecto, asegurando una verdadera soberanía y descentralización.

## **5\. Consideraciones sobre el Suministro y el Valor**

A diferencia de los tokens de suministro fijo, el suministro de $ALPAKA es intrínsecamente dinámico.

* **Sin Suministro Máximo:** No hay un límite superior predefinido para la cantidad de ALPAKA que puede existir. El suministro crece o decrece en función de la actividad de compra y venta.  
* **Respaldo por BNB:** Cada ALPAKA en circulación está teóricamente respaldado por una porción de los BNB mantenidos en el contrato de la curva de bonos. El valor de la reserva de BNB en el contrato aumenta con las compras y disminuye con las ventas.  
* **Volatilidad:** Como cualquier criptoactivo, ALPAKA estará sujeto a la volatilidad del mercado. El modelo de curva de bonos gestiona la liquidez, pero no elimina el riesgo de fluctuaciones de precios.

## **6\. Programas Clave Financiados por la Tesorería (Retiros de BNB)**

Los BNB retirados del contrato de la curva de bonos serán gestionados por la tesorería del proyecto (inicialmente por el equipo, luego por la DAO) para impulsar el crecimiento y la adopción de ALPAKA.

### **A. Programa de Influencers y Embajadores**

Este programa está diseñado para colaborar con figuras influyentes en el espacio cripto y redes sociales en Bolivia, así como para reconocer y empoderar a los miembros más activos y dedicados de nuestra comunidad como embajadores oficiales.

* **Objetivo:** Aumentar la visibilidad de ALPAKA y Alpaka Hub, educar a nuevas audiencias sobre el ecosistema y fomentar la adopción a través de canales de comunicación de confianza.  
* **Mecanismo de Recompensa:**  
  * **Influencers:** Se establecerán acuerdos personalizados con influencers de TikTok, YouTube, X (Twitter) y otras plataformas, ofreciendo recompensas en ALPAKA (adquiridos con los BNB de la tesorería) a cambio de contenido promocional, tutoriales y menciones que generen engagement y tráfico hacia Alpaka Hub. Las recompensas se basarán en métricas de alcance, interacción y resultados.  
  * **Embajadores Comunitarios:** Miembros de la comunidad que demuestren un compromiso excepcional en la moderación, el soporte a nuevos usuarios, la creación de contenido no oficial (memes, gráficos, explicaciones), o la organización de eventos locales, podrán ser seleccionados como "Embajadores Alpaka". Recibirán asignaciones periódicas de ALPAKA (adquiridos con los BNB de la tesorería), acceso exclusivo a información y al equipo central, y reconocimiento público.  
* **Transparencia:** Las asignaciones de tokens a través de este programa se documentarán de forma transparente (sin revelar datos personales de los colaboradores, pero sí los montos y propósitos generales), y serán parte de los informes de uso de la tesorería.

## **7\. Conclusión**

El modelo de curva de bonos para ALPAKA representa un enfoque moderno y autónomo para la economía de un token. Al integrar la liquidez, el descubrimiento de precios y el financiamiento del proyecto directamente en el contrato inteligente, Alpaka busca ofrecer un ecosistema robusto y transparente. Este sistema, combinado con una estrategia activa de recompensas para la comunidad, influencers y embajadores, sentará las bases para un crecimiento sostenible y una adopción masiva en Bolivia.