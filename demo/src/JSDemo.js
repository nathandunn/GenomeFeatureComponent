import GenomeFeatureViewer  from "../../src/GenomeFeatureViewer";
import { ApolloService } from '../../src/services/services';

// Global View Example

let url = 'https://agr-apollo.berkeleybop.io/apollo/track/Homo%20sapiens/All%20Genes/17:43044295..43125483.json?name=1100&name=BRCA1&name=BRCA1/BRCA2-containing%20complex,%20subunit%201&name=BRCAI&name=BRCC1&name=breast%20and%20ovarian%20cancer%20susceptibility%20protein%201&name=breast%20cancer%201&name=breast%20cancer%201,%20early%20onset&name=breast%20cancer%20type%201%20susceptibility%20protein&name=BROVCA1&name=early%20onset%20breast%20cancer%201&name=Fanconi%20anemia,%20complementation%20group%20S&name=FANCS&name=IRIS&name=OTTHUMP00000212143&name=OTTHUMP00000212147&name=OTTHUMP00000212148&name=OTTHUMP00000212149&name=OTTHUMP00000212150&name=OTTHUMP00000212151&name=OTTHUMP00000212155&name=PNCA4&name=PPP1R53&name=protein%20phosphatase%201,%20regulatory%20subunit%2053&name=PSCP&name=RING%20finger%20protein%2053&name=RNF53&name=truncated%20BRCA1&name=truncated%20breast%20and%20ovarian%20cancer%20susceptibility%20protein%201&name=truncated%20breast%20cancer%201';

let configGlobal1 = {
    "locale": "global",
    "chromosome": "chr17",
    "start": 42907412,
    "end": 42907653,
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
            "id": 1,
            "genome": "Homo sapiens",
            "type": "isoform",
            "url": [
                "https://agr-apollo.berkeleybop.io/apollo/track/",
                "/All Genes/",
                ".json"
            ]
        },
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
        // {
        //     "id": 1,
        //     "genome": "Human-Hg38",
        //     "type": "isoform",
        //     "url": [
        //         "http://demo.genomearchitect.org/Apollo2/track/",
        //         "/GenBank TopLevel MRNA/",
        //         ".json"
        //     ]
        // },
    ]
};

var viewer1 = new GenomeFeatureViewer(configGlobal1, "#viewer1", 700, 400);


let configGlobal3 = {
    "locale": "global",
    "chromosome": "chr6",
    "start": 149941938,
    "end": 149949235,
    "tracks": [
        {
            "id": 1,
            "genome": "Homo sapiens",
            "type": "isoform",
            "url": [
                "https://agr-apollo.berkeleybop.io/apollo/track/",
                "/All Genes/",
                ".json"
            ]
        },
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
    ]
};

var viewer3 = new GenomeFeatureViewer(configGlobal3, "#viewer3", 700, 400);

// let configGlobal4 = {
//     "locale": "global",
//     "chromosome": "chr10",
//     "start": 68678435,
//     "end": 68835148,
//     "tracks": [
//         {
//             "id": 1,
//             "genome": "Homo sapiens",
//             "type": "isoform",
//             "url": [
//                 "https://agr-apollo.berkeleybop.io/apollo/track/",
//                 "/All Genes/",
//                 ".json"
//             ]
//         },
//         {
//             "id": 2,
//             "genome": "Human-Hg38",
//             "type": "variant-global",
//             "name": "dbsnps",
//             "url": [
//                 "http://demo.genomearchitect.org/Apollo2/vcf/",
//                 "/dbsnps/",
//                 ".json"
//             ]
//         },
//     ]
// };
//
// var viewer4 = new GenomeFeatureViewer(configGlobal4, "#viewer4", 700, 400);

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
