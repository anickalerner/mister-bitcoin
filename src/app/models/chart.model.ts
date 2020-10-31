export class Chart {
    public title: string = '';
    public description: string = '';
    public type: string;
    public data: [];
    public columns: string[];
    public options: {};
    public width: number;
    public height: number;

    constructor(columns: string[], options, type: string = 'LineChart', width = 800, height = 500) {
        this.type = type;
        this.columns = columns;
        this.options = options;
        this.width = width;
        this.height = height;
    }

    public setDataFromChart(chart) {
        if (chart) {
            this.data = chart['values'].map(value => [new Date(+value.x * 1000).toLocaleDateString('en'), value.y]);
            this.title = chart.name;
            this.description = chart.description;
        }
        
    }
}