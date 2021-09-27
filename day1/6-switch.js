function calculateGradeWithIfs(score) {
    if (score >= 90)
        return 'A';
    else if (score >= 80)
        return 'B';
    else if (score >= 70)
        return 'C';
    else if (score >= 60)
        return 'D';
    else if (score >= 0)
        return 'F';
    else
        return 'Invalid Score';
}

// Falling through
function calculateScore(score) {
    const letterGrade = calculateGradeWithIfs(score);
    console.log(letterGrade);
    switch(letterGrade) {
        case('A'):
            console.log('Great job!');
            break;
        case('B'):
            console.log('Good job!');
            break;
        case('C'):
            console.log('Fine work!');
            break;
        case('D'):
            console.log('Study harder next time');
            break;
        case('F'):
            console.log('Better luck next time');
            break;
        case('Invalid Score'):
            console.log('Invalid score');
            break;
    }
    return 'Finished!';
} 

function helloWorldTranslater(language) {
    switch(language) {
        case ('English'):
        case('eng'):
            return 'Hello World!';
        case('Espanol'):
        case('es'):
            return 'Hola Mundo!';
        case('French'):
        case('fr'):
            return 'Bonjour!';
        default:
            return 'We do not provide for that language at this time. Sorry.';    
    }
}

console.log(helloWorldTranslater('cn'));
