function solution(order) {
    let clap = 0;
    let game = String(order).split('');
    
    for(let i=0; i<game.length; i++) {
        if(game[i] === '3' || game[i] === '6' || game[i] === '9') {
            clap++;
        }
    }
    
    return clap;
}