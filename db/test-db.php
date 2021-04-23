<?php

$mysqli = @mysqli_connect('192.185.176.128', 'denan241_design', 'barueri2020', 'denan241_designBarueri');
if (!$mysqli) {
 echo "Error: " . mysqli_connect_error();
 exit();
}
else
{
	echo "Conectou com sucesso "; 
	exit();	
}
  mysqli_set_charset($mysqli,"utf8");

?>
