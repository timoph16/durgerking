stol = document.getElementById('stol');
data = [
	{id: 123, title: 'Природоведение', code: '12345', len: 10},
	{id: 13333, title: 'По природоведению', code: '555', len: 10},
	{id: 125, title: 'JavaScript', code: 'javascript', len: 18},
	{id: 132, title: 'По природоведению', code: '555', len: 10},
	{id: 126, title: 'Гестапо', code: '1945', len: 10},
	{id: 124, title: 'Тест Python', code: 'python', len: 25},
	{id: 1235456, title: 'Основы органической химии Алканы', code: '9966', len: 10},
	{id: 1123545, title: 'Python Basics', code: '9966-1', len: 10},
	{id: 1, title: 'По истории', code: '666', len: 10},
	{id: 126, title: 'условиям Python', code: '6789', len: 10},
	{id: 456, title: 'Циклы Python', code: '456', len: 10}
];
	stol_info = ''
	for (p of data){
		stol_info += `
		<div class='test-card'>
			<h2 class='test-title'>${p.title}</h2>
			<div style='display: flex; justify-content: center; flex-direction: row;'>
				<span class='test-table-row'>
					<p>ID: ${p.id}</p>
					<p>Всего вопросов: ${p.len}</p>
				</span>
				<span class='test-table-row'>
					<p>Код: ${p.code}</p>
					<p></p>
				</span>
			</div>
		</div>`;
	}
	stol.innerHTML = stol_info;
	