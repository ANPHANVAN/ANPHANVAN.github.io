
// TODO: Add code to check answers to questions
function checkmultiple(event)
{
    let button = event.target;

    if ( button.innerHTML == '1 people per 6 sheep')
        {
            button.style.backgroundColor = 'Green';
            button.parentElement.querySelector('.feedback').innerHTML = 'Correct!';
        }
    else
        {
            button.style.backgroundColor = 'Red';
            button.parentElement.querySelector('.feedback').innerHTML = 'Incorrect!';
        }
}

function checkfree(event)
{
    let button = event.target;

    let input = button.parentElement.querySelector('input');

    if (input.value == 'Switzerland')
    {
        button.style.backgroundColor = 'Green';
        button.parentElement.querySelector('.feedback').innerHTML = 'Correct!';
    }
    else
    {
        button.style.backgroundColor = 'Red';
        button.parentElement.querySelector('.feedback').innerHTML = 'Uncorrect!';
    }
}

