let selectedFood = null;
let finalChoice = null;
let isFinalRound = false;

// 初始设置
let currentFoods = [getRandomFood(), getRandomFood()];

if (currentFoods[0] !== null && currentFoods[1] !== null) {
    const food1Image = document.getElementById("food1Image");
    const food1Name = document.getElementById("food1Name");
    const food2Image = document.getElementById("food2Image");
    const food2Name = document.getElementById("food2Name");

    food1Image.src = currentFoods[0].image;
    food1Name.textContent = currentFoods[0].name;
    food2Image.src = currentFoods[1].image;
    food2Name.textContent = currentFoods[1].name;

    document.getElementById("food1").style.display = "block";
    document.getElementById("food2").style.display = "block";
    document.getElementById("leftButton").textContent = "選擇 " + currentFoods[0].name;
    document.getElementById("rightButton").textContent = "選擇 " + currentFoods[1].name;
}

function selectFood(selected) {
    if (isFinalRound) {
        return; // 如果已经是最后一轮，不执行选择操作
    }

    const food1Image = document.getElementById("food1Image");
    const food1Name = document.getElementById("food1Name");
    const food2Image = document.getElementById("food2Image");
    const food2Name = document.getElementById("food2Name");

    selectedFood = currentFoods[selected - 1];
    currentFoods = [getRandomFood(), selectedFood];

    food1Image.src = currentFoods[0].image;
    food1Name.textContent = currentFoods[0].name;
    food2Image.src = currentFoods[1].image;
    food2Name.textContent = currentFoods[1].name;

    // 设置按钮名称
    document.getElementById("leftButton").textContent = "選擇 " + currentFoods[0].name;
    document.getElementById("rightButton").textContent = "選擇 " + currentFoods[1].name;

    if (foods.length === 0) {
        isFinalRound = true;
        finalChoice = selectedFood;
        const finalChoiceImage = document.getElementById("finalChoiceImage");
        const finalChoiceName = document.getElementById("finalChoiceName");

        finalChoiceImage.src = finalChoice.image;
        finalChoiceName.textContent = "最終選擇: " + finalChoice.name;

        finalChoiceImage.style.display = "block"; // 显示最终选择的图片
        finalChoiceName.style.display = "block"; // 显示最终选择的名称
        document.getElementById("leftButton").style.display = "none"; // 隐藏左按钮
        document.getElementById("rightButton").style.display = "none"; // 隐藏右按钮
        document.getElementById("food1").style.display = "none"; // 隐藏食物选项
        document.getElementById("food2").style.display = "none"; // 隐藏食物选项
        document.getElementById("finalChoice").style.display = "block"; // 显示最终选择部分
    }
}
