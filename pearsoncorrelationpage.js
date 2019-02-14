
window.onload = function()
{
    output("Pearson's Correlation<br/><br/>");

    let independent = [[10,20,40,45,60,65,75,80], [10,20,40,45,60,65,75,80], [10,20,40,45,60,65,75,80]];
    let dependent = [[32,44,68,74,92,98,110,116], [40,40,60,80,90,110,100,130], [100,10,130,90,40,80,180,50]];
    let rho = 0;

    for(let dataset = 0; dataset < 3; dataset++)
    {
        output("Data Set " + (dataset + 1) + "<br/>");

        printData(independent[dataset], dependent[dataset]);

        rho = pearsonCorrelation(independent[dataset], dependent[dataset]);

        output("Pearson Correlation Coefficient rho = " + rho + "<br/><br/>");
    }
}


function printData(independent, dependent)
{
    for(let i = 0, l = independent.length; i < l; i++)
    {
        output(independent[i] + " " + dependent[i] + "<br/>");
    }
}
