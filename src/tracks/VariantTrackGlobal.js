import * as d3 from "d3";
import { ApolloService } from '../services/services';
import d3Tip from "d3-tip";
import {calculateNewTrackPosition} from '../RenderFunctions';

export default class VariantTrack {

    constructor(viewer, track, height, width){
        this.variants = [];
        this.viewer = viewer;
        this.width = width;
        this.height = height;
        this.track = track;
    }

    DrawTrack()
    {
        /*
            Between tracks should be 10px of padding no matter what the size of the track is.
        */
        let viewer = this.viewer;
        let variants = this.variants;
        let width = this.width;
        let x = d3.scaleLinear()
        .domain([this.track["start"], this.track["end"]])
        .range(this.track["range"]);
        let triangle = d3.symbol().type(d3.symbolTriangle).size(20);

        /*
        let tooltip = d3Tip();
        tooltip.attr('class', 'd3-tip').html(function(d) {
            let title = "Case Variant"
            let tipHtml =
            '<table>' +
                '<th colspan="2">' + title.toUpperCase() + '</th>' +
                '<tr><td>Position</td> <td>' +  d["position"] + '</td></tr>' +
                '<tr><td>Mutation</td> <td>' +  d["ref"] + ' > ' + d["mutant"] + '</td></tr>'
            '</table>';
            return tipHtml;

        }).offset([10,0]).direction('s');
        viewer.call(tooltip);
        */

        /*
            Calculate the height and spacing for each track.
            Get the total height of where we are.
            draw new variant track
         */
        let trackHeight = 20;
        let newTrackPosition = calculateNewTrackPosition(this.viewer);

        // Create our track container with a simple background
        let track = viewer.append("g").attr('transform', 'translate(0,' + newTrackPosition + ')').attr("class", "track")

        track.append("rect").attr("height", trackHeight).attr("width", -(this.track["range"][0]) + this.track["range"][1])
        .attr("fill-opacity", 0.1).attr("fill", "rgb(148, 140, 140)")
        .attr("stroke-width", 0).attr("stroke-opacity", 0);

        // Draw our variants
        // TODO: Global Size based on amount of variants?
        let baseline = -8 ;
        let widget_width = 10  ;
        let widget_height = 10  ;
        let line_height = 30 ;
        let apath = "M 0 10 L -10 0 L 10 0 L 0 10 0 -100";
        let path = "M 0 "+widget_width + " L -"+widget_width+" "+baseline +" L "+widget_width +"  "+baseline +" L 0 "+widget_height +" 0 -"+line_height;
        console.log(apath)
        console.log(path)

        let variant_triangles = track.selectAll("path").data(variants).enter()
            .append("path")
            .attr("d", path)
            .attr("class", "global-variant")
            .attr("stroke", "blue")
            .attr("fill", "red")
            .attr("opacity", "0.5")
            .attr("transform", function(d) {
                return "translate(" + x(d.fmin) + "," + 10 + ")";
            }) ;
        // variant_triangles.selectAll("path").dataenter().append("line")
        // // track.selectAll("path").data(variants).enter().append("line")
        //     .attr("x1", 0)
        //     .attr("y1", 10)
        //     .attr("y2", -10)
        //     .attr("x2", 0)
        //     // .attr("class", "global-variant")
        //     .attr("stroke", "black")
        //     .attr("stroke-width", 2)
        //     .attr("fill", "gray")
        //     .attr("transform", function(d) {
        //         return "translate(" + x(d.fmin) + "," + 10 + ")";
        //     });

    }

    /* Method to get variant data */
    async getTrackData(track)
    {
        console.log(track);
        // let apolloService = new ApolloService("http://localhost:8090/apollo")
        let apolloService = new ApolloService("http://demo.genomearchitect.org/Apollo2")
        this.variants =  await apolloService.GetVariants(track["genome"], [track["name"]], track["chromosome"], track["start"], track["end"]);
    }
}
