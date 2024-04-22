package org.mpd.app.model.response;

import lombok.Data;

@Data
public class ResponseModel {

    public enum ResponseStatus {
        SUCCESS, FAIL, ERROR
    }

    private ResponseStatus status;

    private String message;

    private Object data;

    public static ResponseModel ofSuccess() {
        return new ResponseModel(ResponseStatus.SUCCESS, "SUCCESS", null);
    }

    public static ResponseModel ofError() {
        return new ResponseModel(ResponseStatus.ERROR, "ERROR", null);
    }

    public ResponseModel() {}

    public ResponseModel(ResponseStatus status) {
        this.status = status;
    }

    public ResponseModel(String message) {
        this.message = message;
    }

    public ResponseModel(Object data) {
        this.data = data;
    }

    public ResponseModel(ResponseStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseModel(ResponseStatus status, Object data) {
        this.status = status;
        this.data = data;
    }

    public ResponseModel(ResponseStatus status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

}
