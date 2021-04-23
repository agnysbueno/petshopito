<?php

    include_once("db.php");

    if(!empty($_POST))
    {
        $nome = $_POST['name'];
        $especie = $_POST['specie'];
        $raca = $_POST['breed'];
        $idade = $_POST['age'];
        $cor = $_POST['color'];     

        $sql = "INSERT INTO denan241_designBarueri.projeto11_cadastro_pets(nome,especie,raca,idade,cor) 
    VALUES ('${nome}', '${especie}', '${raca}', '${idade}', '${cor}');";

    echo $sql;
    $query = $mysqli->query($sql);
    
    if ($query){
            echo "<br>Cadastrado com sucesso!";
        }
        else{
        echo "<br>a query eh: $sql";
            echo "<br>Houve um erro no cadastrado !";
        }

    }

?>