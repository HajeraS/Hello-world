<html>
  <head>
    <script type="text/javascript" src="script.js">
    </script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class=main>
    <h1>Haj Calculator</h1>
    <form name="form">
      <input name="textinput" class="textinput" />
    </form>
    <table>
    <tr>
      <td colspan=2><button style="width:164" onclick="back()">DEL</button></td>
      <td><button onclick="insert('*')">*</button></td>
      <td><button onclick="insert('/')">/</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(1)">1</button></td>
      <td><button onclick="insert(2)">2</button></td>
      <td><button onclick="insert(3)">3</button></td>
      <td><button onclick="insert('+')">+</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(4)">4</button></td>
      <td><button onclick="insert(5)">5</button></td>
      <td><button onclick="insert(6)">6</button></td>
      <td><button onclick="insert('-')">-</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(7)">7</button></td>
      <td><button onclick="insert(8)">8</button></td>
      <td><button onclick="insert(9)">9</button></td>
      <td rowspan=2><button style="height: 165" onclick="calculate()">=</button></td>
    </tr>
    <tr>
      <td colspan=2><button style="width:164" onclick="insert(0)">0</button></td>
      <td><button onclick="insert('.')">.</button></td>
    </tr>
    </table>
    </div>
  </body>
</html>
