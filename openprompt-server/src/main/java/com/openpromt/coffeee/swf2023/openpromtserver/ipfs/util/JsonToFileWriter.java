package com.openpromt.coffeee.swf2023.openpromtserver.ipfs.util;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class JsonToFileWriter {
    public static File writeJsonToFile(Object jsonObject, String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File file = new File(filePath);
        mapper.writeValue(file, jsonObject);
        return file;
    }
}
