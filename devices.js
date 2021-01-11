function addSpeaker(name){
	var result = `<div name=" ` + name `" + id="` + name + `" class="device">
	<h2>` + name + `</h2>
	<div class="turn">
		<!--Ikona-->
		<i id='speaker' class='fas fa-music'></i>
		<label class="switch">
			<input type="checkbox">' +
			<span class="slider round"></span>' +
		</label>
	</div>

	<i id="more_button" class="fas fa-angle-double-right" onclick="openTab('settings')"></i>
	
	<!--Ustawienia-->
	<div class="device_more" id="settings">
		<!--Usuwanie-->
		<i class='far fa-trash-alt' onclick="deleteDevice('name')"></i>
		<!--Usuwanie-->

		<!--Ustawienia DALEJ-->

		<div class="temperature">
		</div>

		<div class="power">

			<span>Moc</span>
			<div class="powerPickerOption">
				<input type="radio" id="powerSmall" name="moc">
				<label for="powerSmall"><i id="moc1" class="fas fa-fan"></i></label>
			</div>
			<div class="powerPickerOption">
				<input type="radio" id="powerMedium" name="moc">
				<label for="powerMedium"><i id="moc2" class="fas fa-fan"></i></label>
			</div>
			<div class="powerPickerOption">
				<input type="radio" id="powerBig" name="moc">
				<label for="powerBig"><i id="moc3" class="fas fa-fan"></i></label>
			</div>
			<div class="powerPickerOption">
				<input type="radio" id="auto" name="moc">
				<label class="button-auto" for="auto"><b>AUTO</b></label>
			</div>

			<p class="warning">Wybierz jedno</p>

			<div class="color-header">
				<span>Tryb</span>
				<select name="type" id="type-select" class="ui search selection dropdown">
					<option value="">Przeglądaj</option>
					<option value="AUTO">Automatyczna</option>
					<option value="chłodzenie">Chłodzenie</option>
					<option value="wentylator">Wentylator</option>
					<option value="suche">Osuszanie powietrza</option>
					<option value="Ogrzewanie">Ogrzewanie</option>
					<option value="eco">Eco</option>
				</select>
			</div>
		</div>

		<i id="name + less_button" class='fas fa-angle-double-left' onclick="closeTab('settings_+name')"></i>
	</div>`
	return result;
}