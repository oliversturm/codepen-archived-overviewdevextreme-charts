$(function() {
 $("#sankey").dxSankey({
  
 dataSource: [
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "France", weight: 1 },
        { source: "Brazil", target: "England", weight: 1 },
        { source: "Canada", target: "Portugal", weight: 1 },
        { source: "Canada", target: "France", weight: 5 },
        { source: "Canada", target: "England", weight: 1 },
 ],
 link: {
        colorMode: "gradient"
    }
});
});