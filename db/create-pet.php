<?php
include_once("db.php");

$msg = '';

if(!empty($_POST))
{

	$nome = $_POST['name'];
    $especie = $_POST['specie'];
    $raca = $_POST['breed'];
    $idade = $_POST['age'];
    $cor = $_POST['color'];
    $fk = $_POST['id'];
    

    $sql = "INSERT INTO projeto11_cadastro_pets(nome, especie, raca, idade, cor, fk_id_usuario) 
	VALUES ('${nome}', '${especie}', '${raca}', '${idade}', '${cor}', ${fk});";
	
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
        <title>Petshopito | Novo Pet</title>

		<!-- CSS próprio -->
		<link rel='stylesheet' type='text/css' media='screen' href='../styles/main.css'>
    	<link rel='stylesheet' type='text/css' media='screen' href='../styles/messages.css'>
    </head>

	<body>
		<div class="message message-pet">
			<?php
				if ($msg == "Cadastro efetuado com sucesso!") {
			?> 	
				<div class="create create-pet">
					<img src="../icons/checked.svg" alt="" width="50px"
						onload="redirect('new-pet.html')">
					<p class="pet"><?=$msg?></p>
				</div>
			<?php            
				} else {
			?>  
				<div class="create create-pet">
					<img src="../icons/error.svg" alt="" width="50px"
						onload="redirect('new-pet.html')">
					<p class="pet"><?=$msg?></p>
				</div>
			<?php            
				}
			?> 	
		</div>

		<script>
            function redirect(page){
                setTimeout(function(){
					location = `http://localhost/petshopito/${page}`
					},5000)
            }
        </script>  
	</body>

</html>