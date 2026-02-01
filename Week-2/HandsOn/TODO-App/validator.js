export function validateTitle(title){
    if(title.length==0){
        return false
    }
    if(title.length<3){
        return false
    }
    return true
}
export function validatePriority(priority) {
        if(priority=== "low" || priority ==="medium" || priority ==="high")  
            return true  
        return "Priority is Incorrect"           
}
export function validateDueDate(dueDate) {
    if(new Date(dueDate)>new Date())
        return true
}    