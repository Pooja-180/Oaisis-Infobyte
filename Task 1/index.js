document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let input = '';

    document.querySelectorAll('#calculator button').forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;

            switch (buttonText) {
                case 'AC':
                    input = '';
                    break;
                case 'DE':
                    input = input.slice(0, -1);
                    break;
                case '=':
                case 'ENTER':
                    calculateResult();
                    break;
                default:
                    input += buttonText;
                    break;
            }

            display.value = input;
        });
    });

    function calculateResult() {
        try {
            const result = eval(input);
            input = result.toString();
        } catch (error) {
            input = 'Error';
        }
    }
});
