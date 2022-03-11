<?php

if(isset($_FILES['csvfile']) && isset($_POST['submit']) && isset($_POST['inputfilename'])){

	$filename = $_FILES['csvfile']['name'];

	$fileDataUploaded = $_POST['inputfilename'];

	$file = file_get_contents($filename);
	$uploadedPath = file_put_contents("uploads/".$fileDataUploaded.".csv", $file); # save data uploaded

	$data = explode("\n", $file);

	$count = count($data) - 1;

	$headers = $data[0];





	$average = [
		'T' => [
				# T0 Ti T7 T14
				'OX' => [0, 0, 0, 0],
				'HY' => [0, 0, 0, 0],
				'BAR' => [0, 0, 0, 0]
			],
		'NT' => [
				'OX' => [0, 0, 0, 0],
				'HY' => [0, 0, 0, 0],
				'BAR' => [0, 0, 0, 0]
			]
	];

	// OX
	$sumOXT0 = 0;
	$sumOXTi = 0;
	$sumOXT7 = 0;
	$sumOXT14 = 0;
	// HY
	$sumHYT0 = 0;
	$sumHYTi = 0;
	$sumHYT7 = 0;
	$sumHYT14 = 0;
	// BAR
	$sumBART0 = 0;
	$sumBARTi = 0;
	$sumBART7 = 0;
	$sumBART14 = 0;

	$results = []; # tableau final de tous les resultats pour chaque produit product_id => results
	/*	results => product_id => ['T']['score_skin']['session_id']		*/

	$lastP = 0;

	$countT0 = 0;
	$countTi = 0;
	$countT7 = 0;
	$countT14 = 0;


	foreach ($data as $value) {
		$tab = explode(";", $value);

		// tab[2] => NT 1 / T 2
		// tab[3] => score_skin 1 ox / 2 hydr / 3 barriere
		// tab[4] => session_id T0 Timme T7 T14
		// tab[5] ou end(tab) => mesure


		if($tab[0] && $tab[1] && $tab[2] && $tab[3] && $tab[4] && $tab[5]){

			$last = floatval(implode(".", explode(",",end($tab)))); # change '0,01' into 0.01 float value

			if($lastP == 0){

				$lastP = $tab[0];

			}else if($lastP != $tab[0]){

				$countT0 = 0;
				$countTi = 0;
				$countT7 = 0;
				$countT14 = 0;

				$results[$lastP] = $average; # add current Product_Id into results
				$lastP = $tab[0];
				//unset($average);
			}

			/* TRAITEE foreach session_id */
			/*	SCORE SKIN = 1 OX	*/
			if($tab[2] == 2 && $tab[3] == 1 && $tab[4] == 1){
				$average['T']['OX'][0] += $last;
				$countT0 ++;
			}		
			if($tab[2] == 2 && $tab[3] == 1 && $tab[4] == 2){
				$average['T']['OX'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 2 && $tab[3] == 1 && $tab[4] == 3){
				$average['T']['OX'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 2 && $tab[3] == 1 && $tab[4] == 4){
				$average['T']['OX'][3] += $last;
				$countT14 ++;

			}
			/*	SCORE SKIN = 2 HY	*/
			
			if($tab[2] == 2 && $tab[3] == 2 && $tab[4] == 1){
				$average['T']['HY'][0] += $last;
				$countT0 ++;

			}
			if($tab[2] == 2 && $tab[3] == 2 && $tab[4] == 2){
				$average['T']['HY'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 2 && $tab[3] == 2 && $tab[4] == 3){
				$average['T']['HY'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 2 && $tab[3] == 2 && $tab[4] == 4){
				$average['T']['HY'][3] += $last;
				$countT14 ++;

			}
			/*	SCORE SKIN = 3 BAR	*/
			
			if($tab[2] == 2 && $tab[3] == 3 && $tab[4] == 1){
				$average['T']['BAR'][0] += $last;
				$countT0 ++;

			}
			if($tab[2] == 2 && $tab[3] == 3 && $tab[4] == 2){
				$average['T']['BAR'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 2 && $tab[3] == 3 && $tab[4] == 3){
				$average['T']['BAR'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 2 && $tab[3] == 3 && $tab[4] == 4){
				$average['T']['BAR'][3] += $last;
				$countT14 ++;

			}

			/*	NON TRAITEE */

			/*	SCORE SKIN = 1 OX	*/
			if($tab[2] == 1 && $tab[3] == 1 && $tab[4] == 1){
				$average['NT']['OX'][0] += $last;
				$countT0 ++;
			}		
			if($tab[2] == 1 && $tab[3] == 1 && $tab[4] == 2){
				$average['NT']['OX'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 1 && $tab[3] == 1 && $tab[4] == 3){
				$average['NT']['OX'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 1 && $tab[3] == 1 && $tab[4] == 4){
				$average['NT']['OX'][3] += $last;
				$countT14 ++;

			}
			/*	SCORE SKIN = 2 HY	*/
			
			if($tab[2] == 1 && $tab[3] == 2 && $tab[4] == 1){
				$average['NT']['HY'][0] += $last;
				$countT0 ++;

			}
			if($tab[2] == 1 && $tab[3] == 2 && $tab[4] == 2){
				$average['NT']['HY'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 1 && $tab[3] == 2 && $tab[4] == 3){
				$average['NT']['HY'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 1 && $tab[3] == 2 && $tab[4] == 4){
				$average['NT']['HY'][3] += $last;
				$countT14 ++;

			}
			/*	SCORE SKIN = 3 BAR	*/
			
			if($tab[2] == 1 && $tab[3] == 3 && $tab[4] == 1){
				$average['NT']['BAR'][0] += $last;
				$countT0 ++;

			}
			if($tab[2] == 1 && $tab[3] == 3 && $tab[4] == 2){
				$average['NT']['BAR'][1] += $last;
				$countTi ++;

			}
			if($tab[2] == 1 && $tab[3] == 3 && $tab[4] == 3){
				$average['NT']['BAR'][2] += $last;
				$countT7 ++;

			}
			if($tab[2] == 1 && $tab[3] == 3 && $tab[4] == 4){
				$average['NT']['BAR'][3] += $last;
				$countT14 ++;

			}
		
		}
	}

	$results[$lastP] = $average; # final add


	# AVG of each values of each product
	foreach ($results as $pid => $values) {

		//echo "<script> const P1 =".$pid." </script>";

		$results[$pid]['T']['OX'][0] /= $countT0;
		$results[$pid]['T']['OX'][1] /= $countTi;
		$results[$pid]['T']['OX'][2] /= $countT7;
		$results[$pid]['T']['OX'][3] /= $countT14;

		$results[$pid]['T']['HY'][0] /= $countT0;
		$results[$pid]['T']['HY'][1] /= $countTi;
		$results[$pid]['T']['HY'][2] /= $countT7;
		$results[$pid]['T']['HY'][3] /= $countT14;

		$results[$pid]['T']['BAR'][0] /= $countT0;
		$results[$pid]['T']['BAR'][1] /= $countTi;
		$results[$pid]['T']['BAR'][2] /= $countT7;
		$results[$pid]['T']['BAR'][3] /= $countT14;

		//NT

		$results[$pid]['NT']['OX'][0] /= $countT0;
		$results[$pid]['NT']['OX'][1] /= $countTi;
		$results[$pid]['NT']['OX'][2] /= $countT7;
		$results[$pid]['NT']['OX'][3] /= $countT14;

		$results[$pid]['NT']['HY'][0] /= $countT0;
		$results[$pid]['NT']['HY'][1] /= $countTi;
		$results[$pid]['NT']['HY'][2] /= $countT7;
		$results[$pid]['NT']['HY'][3] /= $countT14;

		$results[$pid]['NT']['BAR'][0] /= $countT0;
		$results[$pid]['NT']['BAR'][1] /= $countTi;
		$results[$pid]['NT']['BAR'][2] /= $countT7;
		$results[$pid]['NT']['BAR'][3] /= $countT14;


	}
}


?>

<!DOCTYPE html>
<html>
<head>
	<title>WIRED BEAUTY</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.1/papaparse.min.js"></script>

<link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" />

<script src="http://code.jquery.com/jquery-2.0.3.min.js" ></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>

</head>
<body>

	<script>

		//setDataChart();

		//function setDataChart(){
		/* NON TRAITEE */
			let dataP3 = [<?php echo $results[417432]['NT']['OX'][0]; ?>, <?php echo $results[417432]['NT']['OX'][1]; ?>,<?php echo $results[417432]['T']['OX'][2]; ?>, <?php echo $results[417432]['T']['OX'][3]; ?>];

			let dataP4 = [<?php echo $results[100218]['NT']['OX'][0]; ?>, <?php echo $results[100218]['NT']['OX'][1]; ?>,<?php echo $results[100218]['T']['OX'][2]; ?>, <?php echo $results[100218]['T']['OX'][3]; ?>];

			const data2 = {
				labels: ['T0','Timme','T7','T14'],
				datasets: [
					{
						label: 'P3 OX',
						backgroundColor: '#FFFF00',
						borderColor: '#FFFF00',
						data: dataP3// [un, deux, trois, quatre],					
					},
					{
						label: 'P4 OX',
						backgroundColor: '#6CFF33',
						borderColor: '#6CFF33',
						data: dataP4					
					}
				]
			}


		/********	 TRAITEE 	**********/
			let dataP1 = [<?php echo $results[417432]['T']['OX'][0]; ?>, <?php echo $results[417432]['T']['OX'][1]; ?>,<?php echo $results[417432]['T']['OX'][2]; ?>, <?php echo $results[417432]['T']['OX'][3]; ?>];

			let dataP2 = [<?php echo $results[100218]['T']['OX'][0]; ?>, <?php echo $results[100218]['T']['OX'][1]; ?>,<?php echo $results[100218]['T']['OX'][2]; ?>, <?php echo $results[100218]['T']['OX'][3]; ?>];

			const max = 0.01;

			const data = {
				labels: ['T0','Timme','T7','T14'],
				datasets: [
					{
						label: 'P1',
						backgroundColor: '#FFFF00',
						borderColor: '#FFFF00',
						data: dataP1// [un, deux, trois, quatre],					
					},
					{
						label: 'P2 OX',
						backgroundColor: '#6CFF33',
						borderColor: '#6CFF33',
						data: dataP2					
					}
				]
			}
			const options = '';
		//}

		function displayPie(){
			let mychart = document.getElementById("chartPie");
			mychart.setAttribute("width", 400);
			mychart.setAttribute("height", 400);


			const configLines = {
					type: 'pie',
					data: data,
					options: {
					    responsive: false,
					    interaction: {
					      mode: 'index',
					      intersect: false,
					    },
					    stacked: false,
					    plugins: {
					      title: {
					        display: true,
					         text: 'Average comparison of two products' //editable
					      }
					    },
					    scales: {
					      y: {
					        suggestedMin: 0,
		               		suggestedMax: max //0.01
					      }
					    }
					  },
					};

				let displayButton = document.getElementById("displayLines");
				displayButton.hidden = true;

				let hideButton = document.getElementById('hideLines');
				hideButton.hidden = false;

				new Chart(mychart, configLines);			
		}

		function displayLines(){

			let mychart = document.getElementById("chartLines");
			mychart.setAttribute("width", 400);
			mychart.setAttribute("height", 400);


			const configLines = {
					type: 'line',
					data: data,
					options: {
					    responsive: false,
					    interaction: {
					      mode: 'index',
					      intersect: false,
					    },
					    stacked: false,
					    plugins: {
					      title: {
					        display: true,
					         text: 'Average comparison of two products' //editable
					      }
					    },
					    scales: {
					      y: {
					        suggestedMin: 0,
		               		suggestedMax: max //0.01
					      }
					    }
					  },
					};

				let displayButton = document.getElementById("displayLines");
				displayButton.hidden = true;

				let hideButton = document.getElementById('hideLines');
				hideButton.hidden = false;

				new Chart(mychart, configLines);

		}

		function displayBars(){

			let mychart = document.getElementById("chartBars");
				mychart.setAttribute("width", 400);
				mychart.setAttribute("height", 400);

			const configBars = {
			  type: 'bar',
			  data: data,
			  options: {
			    responsive: false,
			    plugins: {
			      legend: {
			        position: 'top',
			      },
			      title: {
			        display: true,
			        text: 'Average comparison of two products'
			      }
			    }
			  },
			};

			let displayButton = document.getElementById('displayBars');
			displayButton.hidden = true;

			let hideButton = document.getElementById('hideBars');
			hideButton.hidden = false;

			mychart.hidden = false;				
			new Chart(mychart, configBars);
		}

		function displayNT(){
			let mychart = document.getElementById("chartLines2");
			mychart.setAttribute("width", 400);
			mychart.setAttribute("height", 400);

			const configLines = {
					type: 'line',
					data: data2,
					options: {
					    responsive: false,
					    interaction: {
					      mode: 'index',
					      intersect: false,
					    },
					    stacked: false,
					    plugins: {
					      title: {
					        display: true,
					         text: 'Non Treated average measures comparison' //editable
					      }
					    },
					    scales: {
					      y: {
					        suggestedMin: 0,
		               		suggestedMax: max //0.01
					      }
					    }
					  },
					};

				let displayButton = document.getElementById("displayNT");
				displayButton.hidden = true;

				let hideButton = document.getElementById('hideNT');
				hideButton.hidden = false;

				new Chart(mychart, configLines);

		}

		function hideBars(){
			let chart = document.getElementById('chartBars');
			chart.remove();
			let displayButton = document.getElementById('displayBars');
			displayButton.hidden = false;
			let hideButton = document.getElementById('hideBars');
			hideButton.hidden = true;
		}

		function hideLines(){
			let chart = document.getElementById('chartLines');
			chart.remove();
			let displayButton = document.getElementById('displayLines');
			displayButton.hidden = false;
			let hideButton = document.getElementById('hideLines');
			hideButton.hidden = true;
		}

		function removeTextArea(){
			let textarea = document.getElementById("displayContent");
			textarea.hidden = true;
			let removeButton = document.getElementById("textButtonRemove");
			removeButton.hidden = true;
			let textareaButton = document.getElementById("textButton");
			textareaButton.hidden = false;
		}

		function displayTextArea(){
			let textarea = document.getElementById("displayContent");
			textarea.hidden = false;
			let textareaButton = document.getElementById("textButton");
			textareaButton.hidden = true;
			let removeButton = document.getElementById("textButtonRemove");
			removeButton.hidden = false;


		}

		function displayInput(){
			let content = document.getElementById("displayContent");
			let input = document.getElementById("inputField");
			input.innerHTML = content.innerText;

			input.hidden = false;


			let displayInputButton = document.getElementById("textInput");
			displayInputButton.hidden = true;

			let removeInputButton = document.getElementById("textInputRemove");
			removeInputButton.hidden = false;

		}

		function removeInput(){
			let inputField = document.getElementById("inputField");
			inputField.hidden = true;

			let textInput = document.getElementById("textInput");
			textInput.hidden = false;

			let removeInputButton = document.getElementById("textInputRemove");
			removeInputButton.hidden = true;

			toastr.success('Comment edited !');
		}

		function renderTextArea(){
			let x = document.getElementById("inputField").value;
			console.log(x);
			document.getElementById("displayContent").innerHTML = x;
		
		}

		function save(){
			toastr.success('File saved !');

		}

	</script>
	<div class="all">
		<div id="allbuttons">

			<button class="buttons" id="displayLines" onclick="displayLines()" >Lines chart</button>
			<button class="buttons" id="hideLines" onclick="hideLines()" hidden>Hide lines chart</button>

			<button class="buttons" id="displayBars" onclick="displayBars()">Bars chart</button>
			<button class="buttons" id="hideBars" onclick="hideBars()" hidden>Hide bars chart</button>

			<button class="buttons" id="displayNT" onclick="displayNT()" >Lines chart NT</button>
			<button class="buttons" id="hideNT" onclick="" hidden>Hide lines chart NT</button>


			<br/><br/>

			<button class="buttons">Pie chart</button>

			<button class="buttons">Bars chart NT</button>

			<button class="buttons">Lines chart T NT</button>



			<br/><br/>

			<!-- <button class="buttons" id="textaButton" onclick="displayTextArea()">display middle comment section</button> -->
			<button class="buttons" id="textButtonRemove" onclick="removeTextArea()" hidden>Hide comment</button>
			<button class="buttons" id="textButton" onclick="displayTextArea()">Display comment</button>

			<button class="buttons" id="textInput" onclick="displayInput()">Edit comment</button>
			<button class="buttons" id="textInputRemove" onclick="removeInput()" hidden>Apply Edit</button>

			<br/><br/>

				<input type="text" name="savefilename" placeholder="save file name"></input>
				<button id="save" onclick="save()">Save</button>

		</div>


			<!-- <button class="buttons" id="textareaDown" onclick="displayTextArea()">display comment section</button> -->


		<br/>

		<div class="border"></div>

		<div id="uploadSection">
			<form class="form-inline" method="POST" action="" enctype="multipart/form-data">
				<div class="form-group">
				  <label for="files" >Upload a CSV formatted file:</label>
				  <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
				  <input type="file" name="csvfile" id="files" class="form-control" accept=".csv" required />
				</div>
				<div class="form-group">
					<br/>
				 <button name="submit" onclick="displayNT()" id="submit-file" class="buttons" class="btn btn-primary">Upload File</button>
				 <input type="text" name="inputfilename" placeholder="file name"></input>
				 <?php
				 		if(isset($_POST['inputfilename'])){
				 			echo $_POST['inputfilename'];
				 			echo "<script>toastr.success('File uploaded !')</script>";

				 		} 

				 ?>
				 </div>


			</form>

		</div>
		
			<textarea id="inputField" rows="8" cols="50" hidden></textarea>
		
	</div>


	<div class="wrapper">
		<canvas id="chartLines" width="0" height="0" hidden></canvas>
		<canvas id="chartBars" width="0" height="0" hidden></canvas>
		<br/><br/>
		<canvas id="chartLines2" width="0" height="0" hidden></canvas>
		<div id="displayContent" hidden>
		<br/><br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Quisque quis mauris rutrum orci pharetra convallis vitae aliquet dui.<br/>
Maecenas sed auctor felis, sit amet vulputate felis. <br/>Suspendisse a ante non libero pellentesque eleifend in et arcu.<br/>
Nam semper mattis mollis. Morbi sodales elit id ultricies egestas. <br/>Sed mollis semper risus, a egestas leo venenatis id.<br/>
Phasellus diam enim, malesuada quis lobortis ut, tincidunt vel orci. <br/>Donec porta, urna et facilisis porttitor,<br/>
dui risus aliquet metus, ac semper tellus lacus ut augue.
		</div>


	</div>

	<style>
		.wrapper{
			display: flex;
			flex-wrap: wrap;
			gap: 2px;

		}
		#submit-file{
			background: #29CC97;
			
		}
		#textaValidButton{
			position: right;

		}
		#displayContent{
			margin-top: 5px;
		}
		.buttons{
			background: #F18E75;
			border-radius: 10px;
			border: none;
			padding: 8px;

		}
		.border{
			color: solid #F18E75;
		}
		.mytext{
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-size: 30px;
			line-height: 35px;

			color: #000000;
		}
		#save{
			background: #29CC97;
			border-radius: 152px;
			border: none;
			padding: 8px;
		}

		#allbuttons, #uploadSection{
			width: 29%;
			border: solid;
			border-radius: 10px;
			padding: 10px;
			gap: 1px;
		}
		.all{
			display: flex;
			gap: 1px;
			padding: 5px;

		}


	</style>

</body>
</html>