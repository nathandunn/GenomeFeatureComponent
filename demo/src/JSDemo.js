import GenomeFeatureViewer  from "../../src/GenomeFeatureViewer";
import { ApolloService } from '../../src/services/services';

// Global View Example

let configGlobal = {
    "locale": "global",
    "chromosome": "chr1",
    "start": 119886060,
    "end": 119886981,
    "tracks": [
        // {
        //     "id": 2,
        //     "genome": "Human",
        //     "type": "variant-global",
        //     "name": "ExAC Variant Sites",
        //     "url": [
        //         "http://localhost:8090/apollo/vcf/",
        //         "/ExAC%20Variant%20Sites/",
        //         ".json"
        //     ]
        // },
        // {
        //     "id": 1,
        //     "genome": "Human",
        //     "type": "isoform",
        //     "url": [
        //         "http://localhost:8090/apollo/track/",
        //         "/Ensembl%2093/",
        //         ".json"
        //     ]
        // },
        {
            "id": 2,
            "genome": "Human-Hg38",
            "type": "variant-global",
            "name": "dbsnps",
            "url": [
                "http://demo.genomearchitect.org/Apollo2/vcf/",
                "/dbsnps/",
                ".json"
            ]
        },
        {
            "id": 1,
            "genome": "Human-Hg38",
            "type": "isoform",
            "url": [
                "http://demo.genomearchitect.org/Apollo2/track/",
                "/GenBank TopLevel MRNA/",
                ".json"
            ]
        },
    ]
};

var viewer = new GenomeFeatureViewer(configGlobal, "#viewer", 700, 400);

// Local View Example
// Right now we enter in with a specific location, center it in the viewer.
// TODO: Enable a range and start the left most value on the viewer.
let configLocal = {
     "locale": "local",
    // "genome": "Human",
    "genome": "Human-Hg38",
     // "chromosome": 1,
    "chromosome": "chr1",
     "start": 61849000,
     "end": 61849150,
     "centerVariant": true,
     "tracks": [
        //  {
        //      "id": 1,
        //      "trackLabel": "ExAC Variant Sites",
        //      "displayLabel": "ExAC Variants",
        //      // "genome": "Human",
        //      "genome": "Human-Hg38",
        //      "type": "variant",
        //      // "chromosome": 1,
        //      "chromosome": "chr1",
        //      "start": 61849000,
        //      "end": 61849150
        //  },
        //  {
        //     "id": 1,
        //     "trackLabel": "1000 Genomes Phase 3",
        //     "displayLabel": "1000 Genomes",
        //      // "genome": "Human",
        //      "genome": "Human-Hg38",
        //     "type": "variant",
        //      // "chromosome": 1,
        //      "chromosome": "chr1",
        //     "start": 61849000,
        //     "end": 61849150
        // },
         {
             "id": 1,
             "trackLabel": "dbsnps",
             "displayLabel": "DBSnps",
             // "genome": "Human",
             "genome": "Human-Hg38",
             "type": "variant",
             // "chromosome": 1,
             "chromosome": "chr1",
             "start": 61849000,
             "end": 61849150
         },
         {
             "id": 1,
             "trackLabel": "clinvar",
             "displayLabel": "ClinVar",
             // "genome": "Human",
             "genome": "Human-Hg38",
             "type": "variant",
             // "chromosome": 1,
             "chromosome": "chr1",
             "start": 61849000,
             "end": 61849150
         },
     ]
 };


 var viewer2 = new GenomeFeatureViewer(configLocal, "#viewer2", 900, 400)
