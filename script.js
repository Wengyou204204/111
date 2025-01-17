// 模拟数据从 JSON 文件加载
const fetchPersonData = () => {
    const personName = document.getElementById('personName').value.trim();

    if (!personName) {
        alert('请输入人物姓名！');
        return;
    }

    // 动态加载数据
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const person = data.find(item => item.Person === personName);

            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // 清空之前的结果

            if (person) {
                const activities = person.Activities.join(', ');
                const resultHtml = `
                    <p><strong>${person.Person}</strong> 参与的活动有：</p>
                    <p>${activities}</p>
                `;
                resultsDiv.innerHTML = resultHtml;
                resultsDiv.classList.add('fade-in');
            } else {
                resultsDiv.innerHTML = `<p>没有找到 <strong>${personName}</strong> 的数据。</p>`;
                resultsDiv.classList.add('fade-in');
            }
        })
        .catch(err => {
            console.error('数据加载失败', err);
        });
};
