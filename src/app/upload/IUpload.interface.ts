export interface IUpload {
    id: number;
    guid: string;
    fileName: string;
    fileSize: number;
    fileSizeStr: string;
    uploadDate: Date | string;
}