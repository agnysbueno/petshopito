<?php

	include_once("db.php");

	$pdo = pdo_connect_mysql();
	$msg = '';

	if(!empty($_POST))
	{

		$nome = $_POST['name'];
		$telefone = $_POST['phone'];
		$email = $_POST['email'];
		$senha = $_POST['password'];
		

		$sql = "INSERT INTO denan241_designBarueri.projeto11_cadastro_usuarios(nome, telefone, email, senha) 
	VALUES ('${nome}', '${telefone}', '${email}', '${senha}');";

		echo $sql;
		$query = $pdo->query($sql);
		
		if ($query){
				echo "<br>Cadastrado com sucesso!";
			}
			else{
				echo "<br>a query eh: $sql";
				echo "<br>Houve um erro no cadastrado !";
			}

	}

?>
