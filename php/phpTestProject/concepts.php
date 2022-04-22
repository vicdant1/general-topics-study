<?php
    echo "Some text <br/>";

    $abluble = 1;

    // concat with php:

    echo "the value of abluble is ${abluble} <br/>";

    echo "the value of abluble is " . $abluble . '<br/>';

    $a = 100;
    $b = 20;

    if($a > $b)
        echo "a is greater than b";
    elseif($a == $b)
        echo "a is equals to b";
    else
        echo "b is greater than a";

    
    echo "<br/>";

    $indexArray = ['valueA', 'valueB', 'valueC', 1234];

    foreach($indexArray as $i)
        echo "${i}<br/>";

    for($i = 0; $i  < count($indexArray); $i++)
    {
        echo $i . ' - ';
        echo $indexArray[$i] . "<br/>";
    }

    // associative arrays
    /*
    
        this kind of array looks like a dictionnaire

        $associativeArray = ["key" => value]

        looks like so:

        $associativeArray = ["pencils" => 4, "notebooks" => 2, "erasers" => 1];

        keys could be strings, integers... doesn't matter

        $associativeArray = [1 => "element 1", 2 => "element 2", 3 => "element 3"]
    
    */

    $associativeArray = [1 => "abluble1", 2 =>"abluble2", "abluble" => 32];

    echo $associativeArray[abluble] . "<br/>";
    echo $associativeArray[1] . "<br/>";

    // loop in general ways

    /*
    
        in this language there are three different types of loops, the first one is for

    */

    for($i = 0; $i <= 10; $i++)
    {
        echo $i . ' ';
    }

    echo '<br/>';

    $genericArray = ['John', 'Luke', 'Gerald', 'anything else'];
    
    foreach($genericArray as $var)
    {
        echo "${var} ";
    }

    echo "<br/>";

    $iterator =  0;
    $fixedValue = 10;

    while($iterator < $fixedValue)
    {
        echo "${iterator} is less than ${fixedValue}<br/>";
        $iterator++;
    }


?>