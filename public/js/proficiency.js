function probonus(edition, bab_class) {
    let pro_bonus=[0];
    //
    switch (edition) {
        case 5 :
            for (let i = 0;i < 20; i++){
                let divide = Math.floor(i/4) +2;
                pro_bonus.push(divide);
            };
            return pro_bonus[bab_class];
    }
}
