<?php
include_once("db.php");

$msg = '';

if(!empty($_POST))
{

	$nome = $_POST['name'];
	$telefone = $_POST['phone'];
	$email = $_POST['email'];
	$senha = $_POST['password'];
		

	$sql = "INSERT INTO projeto11_cadastro_usuarios(nome, telefone, email, senha) 
	VALUES ('${nome}', '${telefone}', '${email}', '${senha}');";
	
$query = $mysqli->query($sql);
 
if ($query){
		$msg = "Cadastro efetuado com sucesso!";
	}
	else{
		$msg = "Houve um erro no cadastro! Tente novamente";
	}
}
?>

<!DOCTYPE html>
<html lang="pt-br">
    <link rel="shortcut icon" href="../../public/assets/icons/coin.ico">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="../icons/icon.ico"/>
        <title>Petshopito | Cadastro</title>

		<!-- CSS próprio -->
		<link rel='stylesheet' type='text/css' media='screen' href='../styles/main.css'>
    	<link rel='stylesheet' type='text/css' media='screen' href='../styles/messages.css'>
    </head>

	<body>
		<div class="message message-create">
			<?php
				if ($msg == "Cadastro efetuado com sucesso!") {
			?> 	
				<div class="create">
					<img src="../icons/checked.svg" alt="" width="50px"
						onload="redirect('')">
					<p><?=$msg?></p>
				</div>
			<?php            
				} else {
			?>  
				<div class="create">
					<img src="../icons/error.svg" alt="" width="50px"
						onload="redirect('create-account.html')">
					<p><?=$msg?></p>
				</div>
			<?php            
				}
			?> 	
		</div>

		<script>
            function redirect(page){
                setTimeout(function(){
					location = `http://127.0.0.1:5500/${page}`
					},5000)
            }
        </script>  
	</body>

</html>
