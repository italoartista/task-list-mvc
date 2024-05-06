
let base = 'https://api.binance.com';
let endpoint = '/api/v3/klines';
let symbol = 'BTCUSDT';
let interval = '1m';

let url = `${base}${endpoint}?symbol=${symbol}&interval=${interval}`;

async function lerPreco(url) {
    try {
        const res = await fetch(url);
        let data = await res.json();
        let [time, open, high, low, close] = data[0];

        console.log(new Date(time).toLocaleDateString('pt-BR'));
        console.log(open);
        console.log(high);
        console.log(low);
        console.log(close);

        // Limpa a lista antes de adicionar novos itens
        document.querySelector('#task-list').innerHTML = '';

        let li = document.createElement('li');
        li.textContent = `Data: ${new Date(time).toLocaleDateString('pt-BR')} - Abertura: ${open} - Fechamento: ${close}`;
        document.querySelector('#task-list').appendChild(li);
        li.parentNode.style.listStyle = 'none';
        li.parentNode.style.backgroundColor = 'magenta';
        li.parentNode.style.color = 'white';
    } catch (err) {
        console.log(err);
    }
}

// Função para atualizar o preço em intervalos regulares
async function atualizarPreco() {
    await lerPreco(url);
    // Chama a função novamente após um intervalo de tempo
    setTimeout(atualizarPreco, 5000); // Atualiza a cada 1 minuto (60 segundos)
}

// Inicia o processo de atualização
atualizarPreco();
